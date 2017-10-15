"use strict";

const Telegraf = require("telegraf"),
  { token } = require("./token.js"),
  fs = require("fs"),

  bot = new Telegraf(token),

  glossaries = {
    load(language) {
      loadJSON(`glossaries/${language}.json`)
        .then((results) => {
          glossaries[language] = results;
          glossaries[language][variables] = Object.keys(results);
        });
    }
  },
  sections = {
    load(language) {
      loadJSON(`sections/${language}.json`)
        .then((results) => {
          sections[language] = results;
        });
    }
  },
  translations = {
    load(language) {
      loadJSON(`translations/${language}.json`)
        .then((results) => {
          translations[language] = results;
        });
    }
  },

  variables = Symbol.for("variables"),
  previewImageUrl = "http://telegra.ph/file/d2171f35b0577484cca93.png",
  languages = ["en", "ru", "it"],

  newId = () => (lastId++).toString(36),
  loadJSON = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (err, result) => {
        if (err) reject(err);
        resolve(JSON.parse(result));
      });
    });
  },
  getLanguage = (text, from) => {
    const [requestedLanguage] = text.trim().toLowerCase().split(" ");

    if (~languages.indexOf(requestedLanguage)) {
      return requestedLanguage;
    } else if (~languages.indexOf((from.language_code || "").slice(0, 2))) {
      return from.language_code.slice(0, 2);
    }
    return "en";
  },
  getQuery = (text) => {
    if (~languages.indexOf(text.split(" ")[0])) {
      return (text.split(" ")[1] || "").trim().toLowerCase().replace(/[\s_\-]/g, "");
    } else {
      return text.trim().toLowerCase().replace(/[\s_\-]/g, "");
    }
  },
  sendDescription = (language, variable, context) => {
    const description = glossaries[language][variable] || glossaries.en[variable];

    if (description) {
      context.replyWithHTML(insertVariableName(description))
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
              .catch((err) => console.error(err));
          }
        })
        .catch((error) => {
          console.error(error);
          context.reply(translations[language].errorSending)
            .catch((err) => console.error(err));
        });
    } else {
      context.reply(translations[language].unknownVariable)
        .catch((error) => {
          console.error(error);
          context.reply(translations[language].errorSending)
            .catch((err) => console.error(err));
        });
    }
  },
  insertVariableName = (description) => description.text.replace(/\{\{correctWriting\}\}/g, `<a href="${description.link}">${description.correctWriting}</a>`);

let lastId = Number.MIN_SAFE_INTEGER;

languages.forEach((language) => {
  glossaries.load(language);
  sections.load(language);
  translations.load(language);
});

bot.command("start", (context) => {
  const language = getLanguage(context.message.text.replace("/start ", ""), context.message.from);
  context.replyWithMarkdown(translations[language].start)
    .catch((error) => {
      console.error(error);
      context.reply("Oops, there was some error. Try again later")
        .catch((err) => console.error(err));
    });
});

bot.command("help", (context) => {
  const language = getLanguage(context.message.text.replace("/help ", ""), context.message.from);
  context.replyWithMarkdown(translations[language].help)
    .catch((error) => {
      console.error(error);
      context.reply("Oops, there was some error. Try again later")
        .catch((err) => console.error(err));
    });
});

bot.command("variable", (context) => {
  const language = getLanguage(context.message.text.replace("/variable ", ""), context.message.from),
    variable = getQuery(context.message.text.replace("/variable ", ""));

  sendDescription(language, variable, context);
});

bot.command("variable@atthemeglossarybot", (context) => {
  const language = getLanguage(context.message.text.replace("/variable@atthemeglossarybot ", ""), context.message.from),
    variable = getQuery(context.message.text.replace("/variable@atthemeglossarybot ", ""));

  sendDescription(language, variable, context);
});

bot.on("text", (context) => {
  if (context.message.chat.type != "private") return;

  const language = getLanguage(context.message.text, context.message.from),
    variable = getQuery(context.message.text);

  sendDescription(language, variable, context);
});

bot.on("inline_query", ({ inlineQuery, answerInlineQuery }) => {
  const language = getLanguage(inlineQuery.query, inlineQuery.from),
    query = getQuery(inlineQuery.query);

  if (query == "") {
    return answerInlineQuery(
      sections[language].map((section) => ({
        id: newId(),
        type: "article",
        title: section.title,
        url: section.link,
        input_message_content: {
          message_text: `<a href="${section.link}">${section.title}</a>`,
          parse_mode: "HTML"
        },
        cache_time: 60,
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
    .filter((variable) => {
      const index = variable.indexOf(query);
      if (~index && glossaries[language][variable].link) {
        return true;
      } else {
        return false;
      }
    })
    .map((variable) => {
      const description = glossaries[language][variable],
        result = {
          id: newId(),
          type: "article",
          hide_url: true,
          url: description.link,
          title: description.correctWriting,
          description: description.text.replace(/\{\{correctWriting\}\} |<[\w\/]{0,}>/g, ""),
          cache_time: 10,
          input_message_content: {
            message_text: insertVariableName(description),
            parse_mode: "HTML"
          },
          thumb_url: ("image" in description) ? description.image.url : previewImageUrl
        };
      return result;
    });
  return answerInlineQuery(results, { next_offset: "" });
});

bot.startPolling();
console.log("Running…");