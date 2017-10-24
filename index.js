"use strict";

const Telegraf = require("telegraf"),
  token = require("./token.js"),
  fs = require("fs"),

  bot = new Telegraf(token),

  glossaries = {},
  sections = {},
  translations = {},

  variables = Symbol.for("variables"),
  previewImageUrl = "http://telegra.ph/file/d2171f35b0577484cca93.png",
  languages = ["en", "ru", "it", "es"],

  newId = () => (lastId++).toString(36),
  getLanguage = (text, { languageCode = "" }) => {
    const [requestedLanguage] = text.trim().toLowerCase().split(" ");
    languageCode = languageCode.slice(0, 2);

    if (~languages.indexOf(requestedLanguage)) {
      return requestedLanguage;
    } else if (~languages.indexOf(languageCode)) {
      return languageCode;
    }
    return "en";
  },
  getQuery = (text) => {
    const splitText = text.split(" ").slice(0, 2).map((x) => x.toLowerCase().replace(/[\s_\-]/g, ""));
    if (~languages.indexOf(splitText[0])) {
      return splitText.slice(1) || "";
    } else {
      return text.trim().toLowerCase().replace(/[\s_\-]/g, "");
    }
  },
  sendDescription = (language, variable, context) => {
    const description = glossaries[language][variable] || glossaries.en[variable];

    if (description) {
      context.replyWithHTML(
        insertVariableName(description),
        (() => {
          if (context.chat.type != "private") {
            return {
              reply_to_message_id: context.message.message_id
            };
          }
        })()
      )
        .then(() => {
          if (description.image) {
            context.replyWithPhoto(
              {
                url: description.image.url
              },
              {
                caption: description.image.caption
              }
            )
              .catch((error) => console.error(error));
            context.telegram.sendChatAction(context.message.chat.id, "upload_photo")
              .catch((error) => console.error(error));
          }
        })
        .catch((error) => {
          console.error(error);
          context.reply(translations[language].errorSending)
            .catch((error) => console.error(error));
        });
    } else {
      context.reply(translations[language].unknownVariable)
        .catch((error) => {
          console.error(error);
          context.reply(translations[language].errorSending)
            .catch((error) => console.error(error));
        });
    }
  },
  insertVariableName = ({ text, link, correctWriting }) => {
    return text.replace(/\{\{correctWriting\}\}/g, `<a href="${link}">${correctWriting}</a>`);
  };

let lastId = Number.MIN_SAFE_INTEGER;

languages.forEach((language) => {
  glossaries[language] = require(`./glossaries/${language}.js`);
  glossaries[language][variables] = Object.keys(glossaries[language]);
  sections[language] = require(`./sections/${language}.js`);
  translations[language] = require(`./translations/${language}.js`);
});

bot.command("start", (context) => {
  const language = getLanguage(
    context.message.text.replace(/ +(?= )|\/start /g, "").trim(),
    context.message.from
  );

  context.replyWithMarkdown(translations[language].start)
    .catch((error) => {
      console.error(error);
      context.reply("Oops, there was some error. Try again later")
        .catch((error) => console.error(error));
    });
});

bot.command("help", (context) => {
  if (context.message.chat.type != "private") {
    context.reply("I can reply to this command only in private.");
  }

  const language = getLanguage(
    context.message.text.replace(/ +(?= )|\/help /g, "").trim(),
    context.message.from
  );

  context.replyWithMarkdown(translations[language].help)
    .catch((error) => {
      console.error(error);
      context.reply("Oops, there was some error. Try again later")
        .catch((error) => console.error(error));
    });
});

bot.command("variable", (context) => {
  const text = context.message.text.replace(/ +(?= )|\/variable /g, "").trim();

  sendDescription(
    getLanguage(text, context.message.from),
    getQuery(text),
    context
  );
});

bot.command("variable@atthemeglossarybot", (context) => {
  const text = context.message.text.replace(/ +(?= )|\/variable@atthemeglossarybot /g, "").trim();

  sendDescription(
    getLanguage(text, context.message.from),
    getQuery(text),
    context
  );
});

bot.on("text", (context) => {
  if (context.message.chat.type != "private") return;
  const text = context.message.text.replace(/ +(?= )/g, "").trim();

  sendDescription(
    getLanguage(text, context.message.from),
    getQuery(text),
    context
  );
});

try {
  bot.on("inline_query", ({ inlineQuery, answerInlineQuery }) => {
    const language = getLanguage(inlineQuery.query, inlineQuery.from),
      query = getQuery(inlineQuery.query);

    if (query == "") {
      return answerInlineQuery(
        sections[language].map(({ title, link }) => ({
          id: newId(),
          type: "article",
          title,
          url: link,
          input_message_content: {
            message_text: `<a href="${link}">${title}</a>`,
            parse_mode: "HTML"
          },
          hide_url: true,
          thumb_url: previewImageUrl
        })),
        {
          next_offset: "",
          cache_time: 60
        }
      );
    };

    const results = glossaries[language][variables]
      .filter((variable) => ~variable.indexOf(query) && glossaries[language][variable].link)
      .map((variable) => {
        const description = glossaries[language][variable],
          result = {
            id: newId(),
            type: "article",
            hide_url: true,
            url: description.link,
            title: description.correctWriting,
            description: description.text.replace(/\{\{correctWriting\}\} |<[\w\/]{0,}>/g, ""),
            input_message_content: {
              message_text: insertVariableName(description),
              parse_mode: "HTML"
            },
            thumb_url: ("image" in description) ? description.image.url : previewImageUrl
          };
        return result;
      });
    return answerInlineQuery(results, {
      next_offset: "",
      cache_time: 60
    });
  });
} catch (error) {
  console.log(error);
}

bot.startPolling();
console.log("Running @atthemeglossarybot…");