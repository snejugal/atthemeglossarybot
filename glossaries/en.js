module.exports = {
  windowbackgroundwhite: {
    correctWriting: `windowBackgroundWhite`,
    text: `{{correctWriting}} sets the background almost everywhere except the chat screen background. For example, it sets the background on the chats list screen or the background of sections in Settings. This variable also sets the bottom panel in the in-app player.`,
    image: {
      url: `http://telegra.ph/file/718b0751753b0eb8109fe.png`,
      caption: `The red areas show “windowBackgroundWhite”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  windowbackgroundgray: {
    correctWriting: `windowBackgroundGray`,
    text: `{{correctWriting}} sets the secondary background like in Settings between sections or below calls log if it doesn't fill the screen fully.`,
    image: {
      url: `http://telegra.ph/file/718b0751753b0eb8109fe.png`,
      caption: `The green areas show “windowBackgroundGray”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  chatwallpaper: {
    correctWriting: `chat_wallpaper`,
    text: `{{correctWriting}} sets the background on the chat screen, accepts either an image or a color. <b>You must change this variable</b> so Telegram includes your wallpaper in your theme. Changing the wallpaper in Settings → Chat Wallpaper won't include it in your theme.\n<b>Be careful:</b> if you set an image as a wallpaper, Telegram will compress it every time you change any variable with the in -app editor. For this reason, you must set your image again before you share your theme.`,
    image: {
      url: `http://telegra.ph/file/3551fe61d10a903a38bfa.png`,
      caption: `Example of an image and a color as a chat screen wallpaper`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  graysection: {
    correctWriting: `graySection`,
    text: `{{correctWriting}} sets the header background color like “Contacts”. The title on this header is set by windowBackgroumdWhiteGrayText2.`,
    image: {
      url: `http://telegra.ph/file/60edd69ecb22849add590.png`,
      caption: `The red area shows ”graySection”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Contacts-10-01`
  },
  windowbackgroundwhiteicon: {
    correctWriting: `windowBackgroundWhiteIcon`,
    text: `{{correctWriting}} sets the color of icons.`,
    image: {
      url: `http://telegra.ph/file/60edd69ecb22849add590.png`,
      caption: `The green area shows ”windowBackgroundWhiteIcon”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Contacts-10-01`
  },
  windowbackgroundwhiteblacktext: {
    correctWriting: `windowBackgroundWhiteBlackText`,
    text: `{{correctWriting}} sets the color of almost all texts in the app.\n<b>Be careful:</b> the bot inline result titles color is also set by this variable, although the background of the results isn’t set by <i>windowBackgroundWhite</i> but <i>chat_messagePanelBackground</i>. Consider setting the message panel background the same as <i>windowBackgroundWhite</i> or check the readability of the bot results.`,
    image: {
      url: `http://telegra.ph/file/87e5f1b5fe84efd52514c.png`,
      caption: `The red areas show “windowBackgroundWhiteBlackText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11`
  },
  switchtrack: {
    correctWriting: `switchTrack`,
    text: `{{correctWriting}} sets the color of a switch track — its background — when the switch is turned off.`,
    image: {
      url: `http://telegra.ph/file/d2226a05d12be3584dbdf.png`,
      caption: `The blue area shows “switchTrack”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Switch`
  },
  switchthumb: {
    correctWriting: `switchThumb`,
    text: `{{correctWriting}} sets the color of a switch thumb — the circle at the end of a switch — when the switch is turned off.`,
    image: {
      url: `http://telegra.ph/file/d2226a05d12be3584dbdf.png`,
      caption: `The red area shows “switchThumb”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Switch`
  },
  switchtrackchecked: {
    correctWriting: `switchTrackChecked`,
    text: `{{correctWriting}} sets the color of a switch track when it's turned on.`,
    image: {
      url: `http://telegra.ph/file/d2226a05d12be3584dbdf.png`,
      caption: `The green area shows “switchTrackChecked”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Switch`
  },
  switchthumbchecked: {
    correctWriting: `switchThumbChecked`,
    text: `{{correctWriting}} sets the color of a switch thumb when the switch is turned on.`,
    image: {
      url: `http://telegra.ph/file/d2226a05d12be3584dbdf.png`,
      caption: `The pink area shows “switchThumbChecked”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Switch`
  },
  progresscircle: {
    correctWriting: `progressCircle`,
    text: `{{correctWriting}} sets the color of the loading indicator below lists.`,
    image: {
      url: `http://telegra.ph/file/4f13dfd1c6f204c0044b5.png`,
      caption: `The red area shows “progressCircle”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  chatsmessage: {
    correctWriting: `chats_message`,
    text: `{{correctWriting}} sets the color of messages below the chat titles.`,
    image: {
      url: `http://telegra.ph/file/760da93bdf524a8dd6203.png`,
      caption: `The blue underline shows “chats_message”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Chats-List-09-29#General-variables`
  },
  checkboxsquareunchecked: {
    correctWriting: `checkboxSquareUnchecked`,
    text: `{{correctWriting}} sets the border of a checkbox when it's unchecked.`,
    image: {
      url: `http://telegra.ph/file/b06050d06c408d8d2d343.png`,
      caption: `The red area shows “checkboxSquareUnchecked”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Checkbox`
  },
  playeractionbar: {
    correctWriting: `player_actionBar`,
    text: `{{correctWriting}}, <i>player_actionBarItems</i>, <i>player_actionBarTitle</i>, <i>player_actionBarSubtitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefault</i>, <i>actionBarDefaultIcon</i>, <i>actionBarDefaultTitle</i>, <i>actionBarDefaultSubtitle</i> and <i>actionBarDefaultSelector</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The red area shows “player_actionBar”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  playeractionbaritems: {
    correctWriting: `player_actionBarItems`,
    text: `{{correctWriting}}, <i>player_actionBar</i>, <i>player_actionBarTitle</i>, <i>player_actionBarSubtitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefaultIcon</i>, <i>actionBarDefault</i>, <i>actionBarDefaultTitle</i>, <i>actionBarDefaultSubtitle</i> and <i>actionBarDefaultSelector</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The purple areas show “player_actionBarItem”s`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  playeractionbartitle: {
    correctWriting: `player_actionBarTitle`,
    text: `{{correctWriting}}, <i>player_actionBar</i>, <i>player_actionBarItems</i>, <i>player_actionBarSubtitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefaultTitle</i>, <i>actionBarDefault</i>, <i>actionBarDefaultIcon</i>, <i>actionBarDefaultSubtitle</i> and <i>actionBarDefaultSelector</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The green underline shows “player_actionBarTitle”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  playeractionbarsubtitle: {
    correctWriting: `player_actionBarSubtitle`,
    text: `{{correctWriting}}, <i>player_actionBar</i>, <i>player_actionBarItems</i>, <i>player_actionBarTitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefaultSubtitle</i>, <i>actionBarDefault</i>, <i>actionBarDefaultIcon</i>, <i>actionBarDefaultTitle</i> and <i>actionBarDefaultSelector</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The orange underline shows “player_actionBarSubtitle”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  playeractionbarselector: {
    correctWriting: `player_actionBarSelector`,
    text: `{{correctWriting}}, <i>player_actionBar</i>, <i>player_actionBarItems</i>, <i>player_actionBarTitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefaultSelector</i>, <i>actionBarDefault</i>, <i>actionBarDefaultIcon</i>, <i>actionBarDefaultTitle</i> and <i>actionBarDefaultSubtitle</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The blue circle shows “player_actionBarSelector”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
}