`use strict`;

const Telegraf = require(`telegraf`);
const { token, options } = require(`./config.js`);
const fs = require(`fs`);
const bot = new Telegraf(token, options);

const glossaries = {};
const sections = {};
const translations = {};

const variables = Symbol.for(`variables`);
const previewImageUrl = `http://telegra.ph/file/d2171f35b0577484cca93.png`;
const languages = [`en`, `ru`, `it`, `es`];

const newId = () => (lastId++).toString(36);
const normalizeQuery = (x) => x.trim().toLowerCase().replace(/[\s_\-]/g, ``);
const logError = (...error) => console.error(...error);

const getLanguage = (text, { languageCode = `` }) => {
  const [requestedLanguage] = text.trim().toLowerCase().split(` `);
  languageCode = languageCode.slice(0, 2);

  if (languages.includes(requestedLanguage)) {
    return requestedLanguage;
  } else if (languages.includes(languageCode)) {
    return languageCode;
  }
  return `en`;
};

const getQuery = (text) => {
  const splitText = text.split(` `).slice(0, 2).map(normalizeQuery);

  if (languages.includes(splitText[0])) {
    return splitText.slice(1) || ``;
  } else {
    return normalizeQuery(text);
  }
};

const sendDescription = (language, variable, context) => {
  const description = glossaries[language][variable] || glossaries.en[variable];

  if (description) {
    const options = {};
    if (context.chat.type != `private`) {
      options.reply_to_message_id = context.message.message_id;
    }

    context.replyWithHTML(insertVariableName(description), options)
      .then(() => {
        if (`image` in description) {
          const url = {
            url: description.image.url
          };
          const caption = {
            caption: description.image.caption
          };

          context.replyWithPhoto(url, caption)
            .catch(logError);
          context.telegram.sendChatAction(context.chat.id, `upload_photo`)
            .catch(logError);
        }
      })
      .catch((error) => {
        logError(error);

        context.reply(translations[language].errorSending)
          .catch(logError);
      });
  } else {
    context.reply(translations[language].unknownVariable)
      .catch((error) => {
        logError(error);

        context.reply(translations[language].errorSending)
          .catch(logError);
      });
  }
};

const insertVariableName = ({ text, url, correctWriting }) => text.replace(
  /\{\{correctWriting\}\}/g,
  `<a href="${url}">${correctWriting}</a>`,
);

const removeEntities = (message) => {
  if (!message.entities) {
    return message.text;
  }
  const query = message.text.split(``);
  let entitiesLength = 0;
  message.entities.forEach((entity, i) => {
    let offset = entity.offset + entitiesLength;
    if (offset > 0) {
      offset--;
    }
    entitiesLength += entity.length + 1;
    query.splice(offset, entity.length + 1);
  });
  return query.join(``);
};

const removeCorrentWriting = (string) => string.replace(
  /\{\{correctWriting\}\}[ \,]{0,}|<[\w\/]{0,}>/g,
  ``,
);

let lastId = Number.MIN_SAFE_INTEGER;

languages.forEach((language) => {
  const glossary = require(`./glossaries/${language}.js`);
  glossaries[language] = {};
  for (let variable in glossary) {
    glossary[variable].correctWriting = variable;
    const iterableVariable = variable.replace(/_/g, ``).toLowerCase();
    glossaries[language][iterableVariable] = glossary[variable];
  }
  glossaries[language][variables] = Object.keys(glossaries[language]);

  sections[language] = require(`./sections/${language}.js`);
  translations[language] = require(`./translations/${language}.js`);
});

bot.use((context, next) => {
  if (context.updateType != `inline_query`) {
    const sendChatAction = context.telegram.sendChatAction;
    const chatId = context.chat.id;

    context.sendChatAction = sendChatAction.bind(chatId);
  }
  next();
});

bot.command(`start`, (context) => {
  const message = removeEntities(context.message);
  const language = getLanguage(message, context.from);

  context.replyWithMarkdown(translations[language].start)
    .catch((error) => {
      logError(error);
      context.reply(`Oops, there was some error. Try again later`)
        .catch(logError);
    });
});

bot.command(`help`, (context) => {
  if (context.message.chat.type != `private`) {
    context.reply(`I will reply to this command only in private.`);
    return;
  }

  const message = removeEntities(context.message);
  const language = getLanguage(message, context.from);

  context.replyWithMarkdown(translations[language].help)
    .catch((error) => {
      logError(error);
      context.reply(`Oops, there was some error. Try again later`)
        .catch(logError);
    });
});

bot.command(`variable`, (context) => {
  const message = removeEntities(context.message);
  const language = getLanguage(message, context.from);
  const query = getQuery(message);

  sendDescription(language, query, context);
});

bot.on(`text`, (context) => {
  if (context.chat.type != `private`) return;

  const message = removeEntities(context.message);
  const language = getLanguage(message, context.from);
  const query = getQuery(message);

  sendDescription(language, query, context);
});

bot.on(`inline_query`, ({ inlineQuery, answerInlineQuery }) => {
  try {
    const language = getLanguage(inlineQuery.query, inlineQuery.from);
    const query = getQuery(inlineQuery.query);
    const results = [];
    const offset = inlineQuery.offset || 0;
    const options = {
      next_offset: ``,
      is_personal: false,
      cache_time: 300,
    };

    if (query == ``) {
      sections[language].forEach(({ title, url, previewLink }) => {
        results.push({
          id: newId(),
          type: `article`,
          title,
          url,
          hide_url: true,
          thumb_url: previewLink || previewImageUrl,
          input_message_content: {
            message_text: `<a href="${url}">${title}</a>`,
            parse_mode: `HTML`,
          },
        })
      });

      if (inlineQuery.query.trim() == ``) {
        options.is_personal = true;
      }
    } else {
      const variablesList = glossaries[language][variables]
        .filter((variable) => (
          variable.includes(query) && glossaries[language][variable].url
        ))
        .slice(offset);

      if (variablesList.length > 50) {
        options.next_offset = offset + 50;
        variablesList = variablesList.slice(0, 50);
      }

      variablesList
        .forEach((variable) => {
          const description = glossaries[language][variable];
          const { correctWriting: title, url } = description;
          const text = removeCorrentWriting(description.text.replace(/\n/g, ` `));
          let thumb_url;
          if (`image` in description) {
            thumb_url = description.image.url;
          } else {
            thumb_url = previewImageUrl;
          }

          results.push({
            id: newId(),
            type: `article`,
            title,
            url,
            hide_url: true,
            thumb_url,
            description: text,
            input_message_content: {
              message_text: insertVariableName(description),
              parse_mode: `HTML`
            },
          });
        })
    }
    answerInlineQuery(results, options);
  } catch (error) {
    logError(error);
  }
});

bot.startPolling();
console.log(`Running @${options.username}…`);