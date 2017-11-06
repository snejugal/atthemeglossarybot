module.exports = {
  windowBackgroundWhite: {
    text: `{{correctWriting}} sets the background almost everywhere except the chat screen background. For example, it sets the background on the chats list screen or the background of sections in Settings. This variable also sets the bottom panel in the in-app player.`,
    image: {
      url: `http://telegra.ph/file/718b0751753b0eb8109fe.png`,
      caption: `The red areas show “windowBackgroundWhite”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  windowBackgroundGray: {
    text: `{{correctWriting}} sets the secondary background like in Settings between sections or below calls log if it doesn't fill the screen fully.`,
    image: {
      url: `http://telegra.ph/file/718b0751753b0eb8109fe.png`,
      caption: `The green areas show “windowBackgroundGray”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  chat_wallpaper: {
    text: `{{correctWriting}} sets the background on the chat screen, accepts either an image or a color. <b>You must change this variable</b> so Telegram includes your wallpaper in your theme. Changing the wallpaper in Settings → Chat Wallpaper won't include it in your theme.\n<b>Be careful:</b> if you set an image as a wallpaper, Telegram will compress it every time you change any variable with the in -app editor. For this reason, you must set your image again before you share your theme.`,
    image: {
      url: `http://telegra.ph/file/3551fe61d10a903a38bfa.png`,
      caption: `Example of an image and a color as a chat screen wallpaper`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  graySection: {
    text: `{{correctWriting}} sets the header background color like “Contacts”. The title on this header is set by windowBackgroumdWhiteGrayText2.`,
    image: {
      url: `http://telegra.ph/file/60edd69ecb22849add590.png`,
      caption: `The red area shows ”graySection”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Contacts-10-01`
  },
  windowBackgroundWhiteIcon: {
    text: `{{correctWriting}} sets the color of icons.`,
    image: {
      url: `http://telegra.ph/file/60edd69ecb22849add590.png`,
      caption: `The green area shows ”windowBackgroundWhiteIcon”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Contacts-10-01`
  },
  windowBackgroundWhiteBlackText: {
    text: `{{correctWriting}} sets the color of almost all texts in the app.\n<b>Be careful:</b> the bot inline result titles color is also set by this variable, although the background of the results isn’t set by <i>windowBackgroundWhite</i> but <i>chat_messagePanelBackground</i>. Consider setting the message panel background the same as <i>windowBackgroundWhite</i> or check the readability of the bot results.`,
    image: {
      url: `http://telegra.ph/file/87e5f1b5fe84efd52514c.png`,
      caption: `The red areas show “windowBackgroundWhiteBlackText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11`
  },
  windowBackgroundWhiteGrayText: {
    text: `{{correctWriting}} sets the last seen time color in Contacts.`,
    image: {
      url: `http://telegra.ph/file/8d7e99d373dde4c0294a0.png`,
      caption: `The red area at the top shows “windowBackgroundWhiteGrayText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Gray-text`
  },
  windowBackgroundWhiteGrayText2: {
    text: `{{correctWriting}} sets the color of descriptions below option titles in Settings. Also sets the color of title on <i>graySection</i>.`,
    image: {
      url: `http://telegra.ph/file/8d7e99d373dde4c0294a0.png`,
      caption: `The purple area shows “windowBackgroundWhiteGrayText2”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Gray-text`
  },
  windowBackgroundWhiteGrayText3: {
    text: `{{correctWriting}} sets the color of a session’s IP in Settings → Privacy and Security → Active Sessions.`,
    image: {
      url: `http://telegra.ph/file/8d7e99d373dde4c0294a0.png`,
      caption: `The dark blue area shows “windowBackgroundWhiteGrayText3”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Gray-text`
  },
  windowBackgroundWhiteGrayText4: {
    text: `{{correctWriting}} sets the color of description texts below sections in Settings.`,
    image: {
      url: `http://telegra.ph/file/8d7e99d373dde4c0294a0.png`,
      caption: `The light blue area shows “windowBackgroundWhiteGrayText4”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Gray-text`
  },
  windowBackgroundWhiteGrayText5: {
    text: `{{correctWriting}} sets the color of Telegram version at the bottom in Settings.`,
    image: {
      url: `http://telegra.ph/file/8d7e99d373dde4c0294a0.png`,
      caption: `The green area shows “windowBackgroundWhiteGrayText5”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Gray-text`
  },
  windowBackgroundWhiteGrayText6: {
    text: `{{correctWriting}} sets the color of description texts below text fields like in Settings → Phone → Change Number and the color of the info text in “What is a Channel?” screen that appears when you try to create a channel (unless you already have one).\n<b>Be careful</b>: this variable sets the color of text like “Please enter your password” on the gray background in Settings → Privacy and Security → Two-step Verification/Passcode Lock when you have either a two-step or a passcode lock password when you have (one of) them set.`,
    image: {
      url: `http://telegra.ph/file/8d7e99d373dde4c0294a0.png`,
      caption: `The yellow area shows “windowBackgroundWhiteGrayText6”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Gray-text`
  },
  windowBackgroundWhiteGrayText7: {
    text: `{{correctWriting}} sets the color of a disabled item in Settings → Privacy and Security → Passcode Lock when you have no passcode lock.`,
    image: {
      url: `http://telegra.ph/file/8d7e99d373dde4c0294a0.png`,
      caption: `The pink area at the bottom shows “windowBackgroundWhiteGrayText7”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Gray-text`
  },
  windowBackgroundWhiteGrayText8: {
    text: `{{correctWriting}} sets the color of the info text in Settings → Username.`,
    image: {
      url: `http://telegra.ph/file/8d7e99d373dde4c0294a0.png`,
      caption: `The brown area shows “windowBackgroundWhiteGrayText8”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Gray-text`
  },
  windowBackgroundWhiteRedText: {
    text: `{{correctWriting}} sets the color of red buttons on dialogs like the “Clear Cache” button in Settings → Data and Storage → Storage Usage → Clear Cache.\nYou can’t change this variable with the in -app editor for unknown reasons, so you have to use <a href="https://snejugal.ru/attheme-editor">.attheme editor</a> to change this variable.`,
    image: {
      url: `http://telegra.ph/file/4a7037b726915fb946ce5.png`,
      caption: `The red area shows “windowBackgroundWhiteRedText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Red-text`
  },
  windowBackgroundWhiteRedText2: {
    text: `{{correctWriting}} sets the color of red buttons in Settings like the “Terminate All Other Sessions” button in Settings → Privacy and Security → Active Sessions.`,
    image: {
      url: `http://telegra.ph/file/4a7037b726915fb946ce5.png`,
      caption: `The dark blue area shows “windowBackgroundWhiteRedText2”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Red-text`
  },
  windowBackgroundWhiteRedText3: {
    text: `{{correctWriting}} sets the color of the “Abort two-step verification setup” button in Settings → Privacy and Security → Two-step Verification while settings up a two-step password.`,
    image: {
      url: `http://telegra.ph/file/4a7037b726915fb946ce5.png`,
      caption: `The green area shows “windowBackgroundWhiteRedText3”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Red-text`
  },
  windowBackgroundWhiteRedText4: {
    text: `{{correctWriting}} sets the color of warning text below a text field like in Settings → Username when you try to take a username less than 5 symbols or already taken.`,
    image: {
      url: `http://telegra.ph/file/4a7037b726915fb946ce5.png`,
      caption: `The purple area shows “windowBackgroundWhiteRedText4”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Red-text`
  },
  windowBackgroundWhiteRedText5: {
    text: `{{correctWriting}} sets the color of warning buttons like “Leave Channel” in the channel info screen.`,
    image: {
      url: `http://telegra.ph/file/4a7037b726915fb946ce5.png`,
      caption: `The light blue area shows “windowBackgroundWhiteRedText5”, and the yellow area shows “windowBackgroundWhiteRedText6”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Red-text`
  },
  windowBackgroundWhiteRedText6: {
    text: `{{correctWriting}} sets the color of “Reset my account” button when you try to sign in your account that has a two-step verification password but you don’t remember it, try to restore it with your email but you can’t access it.\nThis variable can’t be changed with the in-app editor (because it closes after you sign out), so you have to use <a href="https://snejugal.ru/attheme-editor">.attheme editor</a> to change this variable.`,
    image: {
      url: `http://telegra.ph/file/4a7037b726915fb946ce5.png`,
      caption: `The yellow area shows “windowBackgroundWhiteRedText6”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Red-text`
  },
  windowBackgroundWhiteGreenText: {
    text: `{{correctWriting}} sets the color of success text below text fields like in Settings → Username when you take a username no one has and longer than 5 symbols.`,
    image: {
      url: `http://telegra.ph/file/d7259d4042373280087b0.png`,
      caption: `The red area shows “windowBackgroundWhuteGreenText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Green-text`
  },
  windowBackgroundWhiteGreenText2: {
    text: `{{correctWriting}} sets the color of green buttons like “Start Secret Chat” in the chat with a person info screen.`,
    image: {
      url: `http://telegra.ph/file/d7259d4042373280087b0.png`,
      caption: `The blue area shows “windowBackgroundWhiteGreenText2”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Green-text`
  },
  windowBackgroundWhiteBlueHeader: {
    text: `{{correctWriting}} sets the color of section header in Settings.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The red area shows “windowBackgroundWhiteBlueHeader`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteBlueText: {
    text: `{{correctWriting}} sets the color of the Online status text in Contacts.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The purple area shows “windowBackgroundWhiteBlueText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteBlueText3: {
    text: `{{correctWriting}} sets the color of the Online status text in search results.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The dark blue area shows “windowBackgroundWhiteBlueText3”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteBlueText4: {
    text: `{{correctWriting}} sets the color of the “Change Number” button in Settings → Phone and also sets the match highlights in search results.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The light blue areas show “windowBackgroundWhiteBlueText4”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteBlueText5: {
    text: `{{correctWriting}} sets the color of “Create Channel” button in “What is a Channel?” screen that appears when you try to create a new channel (unless you already have one). If the screen doesn’t appear to you, then use <a href="https://snejugal.ru/attheme-editor">.attheme editor</a> to change this variable.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The green area shows “windowBackgroundWhiteBlueText5”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteBlueText6: {
    text: `{{correctWriting}} sets the color of the pay button after you entered all payment data when you’re buying something. You can make a fake pay with @ShopBot to see the button or use <a href="https://snejugal.ru/attheme-editor">.attheme editor</a> to add change the variable.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The light orange area is “windowBackgroundWhiteBlueText6”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteBlueText7: {
    text: `{{correctWriting}} sets the “Send your current location” button color in location attachment screen.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The teal area shows “windowBackgroundWhiteBlueText7”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteValueText: {
    text: `{{correctWriting}} sets the option value color in Settings.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The light green one shows “windowBackgroundWhiteValueText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteLinkText: {
    text: `{{correctWriting}} sets the color of links, like #hashtags, @username's or just links in the chat info screen.`,
    image: {
      url: `http://telegra.ph/file/9695308c6022693ef0383.png`,
      caption: `The dark orange area shows “windowBackgroundWhiteLinkText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteLinkSelection: {
    text: `{{correctWriting}} sets the overlay color that appears when you tap a link.`,
    image: {
      url: `http://telegra.ph/file/b0ab322c5c204203db8f6.png`,
      caption: `The red area shows “windowBackgroundWhiteLinkSelection”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11#Blue-text`
  },
  windowBackgroundWhiteHintText: {
    text: `{{correctWriting}} sets the color of an input's placeholder — it's the text that you see before you enter any text.`,
    image: {
      url: `http://telegra.ph/file/042dc4e3fb8f97894b024.png`,
      caption: `The red area shows “windowBackgroundWhiteHintText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Text-flelds`
  },
  windowBackgroundWhiteInputField: {
    text: `{{correctWriting}} sets the bottom border color when the input is inactive.`,
    image: {
      url: `http://telegra.ph/file/042dc4e3fb8f97894b024.png`,
      caption: `The blue area shows “windowBackgroundWhiteInputField”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Text-flelds`
  },
  windowBackgroundWhiteInputFieldActivated: {
    text: `{{correctWriting}} sets the bottom border color when the input is active.`,
    image: {
      url: `http://telegra.ph/file/042dc4e3fb8f97894b024.png`,
      caption: `The green area shows “windowBackgroundWhiteInputFieldActivated”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Text-flelds`
  },
  switchTrack: {
    text: `{{correctWriting}} sets the color of a switch track — its background — when the switch is turned off.`,
    image: {
      url: `http://telegra.ph/file/d2226a05d12be3584dbdf.png`,
      caption: `The blue area shows “switchTrack”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Switch`
  },
  switchThumb: {
    text: `{{correctWriting}} sets the color of a switch thumb — the circle at the end of a switch — when the switch is turned off.`,
    image: {
      url: `http://telegra.ph/file/d2226a05d12be3584dbdf.png`,
      caption: `The red area shows “switchThumb”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Switch`
  },
  switchTrackChecked: {
    text: `{{correctWriting}} sets the color of a switch track when it's turned on.`,
    image: {
      url: `http://telegra.ph/file/d2226a05d12be3584dbdf.png`,
      caption: `The green area shows “switchTrackChecked”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Switch`
  },
  switchThumbChecked: {
    text: `{{correctWriting}} sets the color of a switch thumb when the switch is turned on.`,
    image: {
      url: `http://telegra.ph/file/d2226a05d12be3584dbdf.png`,
      caption: `The pink area shows “switchThumbChecked”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Switch`
  },
  progressCircle: {
    text: `{{correctWriting}} sets the color of the loading indicator below lists.`,
    image: {
      url: `http://telegra.ph/file/4f13dfd1c6f204c0044b5.png`,
      caption: `The red area shows “progressCircle”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  chats_message: {
    text: `{{correctWriting}} sets the color of messages below the chat titles.`,
    image: {
      url: `http://telegra.ph/file/760da93bdf524a8dd6203.png`,
      caption: `The blue underline shows “chats_message”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Chats-List-09-29#General-variables`
  },
  checkboxSquareUnchecked: {
    text: `{{correctWriting}} sets the border of a checkbox when it's unchecked.`,
    image: {
      url: `http://telegra.ph/file/b06050d06c408d8d2d343.png`,
      caption: `The red area shows “checkboxSquareUnchecked”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Checkbox`
  },
  checkboxSquareDisabled: {
    text: `{{correctWriting}} sets the background of a checkbox when it's disabled. Like in Settings of a group that's not converted to a supergroup.`,
    image: {
      url: `http://telegra.ph/file/b06050d06c408d8d2d343.png`,
      caption: `The orange area shows “checkboxSquareDisabled”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Checkbox`
  },
  checkboxSquareBackground: {
    text: `{{correctWriting}} sets the background of a checkbox when it's checked.`,
    image: {
      url: `http://telegra.ph/file/b06050d06c408d8d2d343.png`,
      caption: `The blue area shows “checkboxSquareBackground”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Checkbox`
  },
  checkboxSquareCheck: {
    text: `{{correctWriting}} sets the color of the check mark when the checkbox is checked.`,
    image: {
      url: `http://telegra.ph/file/b06050d06c408d8d2d343.png`,
      caption: `The green area shows “checkboxSquareCheck”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Checkbox`
  },
  windowBackgroundGrayLine: {
    text: `{{correctWriting}} sets the border color of openable lists control.`,
    image: {
      url: `http://telegra.ph/file/a07de2cdb393076771c17.png`,
      caption: `The red area shows “windowBackgroundGrayLine”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Openable-list-control`
  },
  contextProgressInner1: {
    text: `{{correctWriting}} and <b>contextProgressOuter1</b> set the progress indicator when an edited message is being saved.`,
    image: {
      url: `http://telegra.ph/file/6dfa78da2030606639c35.png`,
      caption: `The red area shows “contextProgress*1”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  contextProgressOuter1: {
    text: `{{correctWriting}} and <b>contextProgressInner1</b> set the progress indicator when an edited message is being saved.`,
    image: {
      url: `http://telegra.ph/file/6dfa78da2030606639c35.png`,
      caption: `The red area shows “contextProgress*1”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  contextProgressInner2: {
    text: `{{correctWriting}} and <b>contextProgressOuter2</b> set the progress indicator on the action bar when a group is being created or a game is being loaded.`,
    image: {
      url: `http://telegra.ph/file/6dfa78da2030606639c35.png`,
      caption: `The green area shows “contextProgress*2”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  contextProgressOuter2: {
    text: `{{correctWriting}} and <b>contextProgressInner2</b> set the progress indicator on the action bar when a group is being created or a game is being loaded.`,
    image: {
      url: `http://telegra.ph/file/6dfa78da2030606639c35.png`,
      caption: `The green area shows “contextProgress*2”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  contextProgressInner3: {
    text: `{{correctWriting}} and <b>contextProgressOuter3</b> set the progress indicator on the top bar when opening a link using Instant View. These variables can be changed only with <a href="https://snejugal.ru/attheme-editor">.attheme editor.</a>`,
    image: {
      url: `http://telegra.ph/file/6dfa78da2030606639c35.png`,
      caption: `The purple area shows “contextProgress*3”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  contextProgressOuter3: {
    text: `{{correctWriting}} and <b>contextProgressInner3</b> set the progress indicator on the top bar when opening a link using Instant View. These variables can be changed only with <a href="https://snejugal.ru/attheme-editor">.attheme editor.</a>`,
    image: {
      url: `http://telegra.ph/file/6dfa78da2030606639c35.png`,
      caption: `The purple area shows “contextProgress*3”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  login_progressInner: {
    text: `{{correctWriting}} and <b>login_progressOuter</b> set the timer counting progress indicator when you're signing in and waiting for a call from Telegram that it will process automatically (usually Telegram makes a call when you're signed in another device but you can't access it to get the sign in code).`,
    image: {
      url: `http://telegra.ph/file/6dfa78da2030606639c35.png`,
      caption: `The orange area shows “login_progress*”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  login_progressOuter: {
    text: `{{correctWriting}} and <b>login_progressInner</b> set the timer counting progress indicator when you're signing in and waiting for a call from Telegram that it will process automatically (usually Telegram makes a call when you're signed in another device but you can't access it to get the sign in code).`,
    image: {
      url: `http://telegra.ph/file/6dfa78da2030606639c35.png`,
      caption: `The orange area shows “login_progress*”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Controls-09-15#Progress-indicators`
  },
  player_actionBar: {
    text: `{{correctWriting}}, <i>player_actionBarItems</i>, <i>player_actionBarTitle</i>, <i>player_actionBarSubtitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefault</i>, <i>actionBarDefaultIcon</i>, <i>actionBarDefaultTitle</i>, <i>actionBarDefaultSubtitle</i> and <i>actionBarDefaultSelector</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The red area shows “player_actionBar”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  player_actionBarItems: {
    text: `{{correctWriting}}, <i>player_actionBar</i>, <i>player_actionBarTitle</i>, <i>player_actionBarSubtitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefaultIcon</i>, <i>actionBarDefault</i>, <i>actionBarDefaultTitle</i>, <i>actionBarDefaultSubtitle</i> and <i>actionBarDefaultSelector</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The purple areas show “player_actionBarItem”s`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  player_actionBarTitle: {
    text: `{{correctWriting}}, <i>player_actionBar</i>, <i>player_actionBarItems</i>, <i>player_actionBarSubtitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefaultTitle</i>, <i>actionBarDefault</i>, <i>actionBarDefaultIcon</i>, <i>actionBarDefaultSubtitle</i> and <i>actionBarDefaultSelector</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The green underline shows “player_actionBarTitle”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  player_actionBarSubtitle: {
    text: `{{correctWriting}}, <i>player_actionBar</i>, <i>player_actionBarItems</i>, <i>player_actionBarTitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefaultSubtitle</i>, <i>actionBarDefault</i>, <i>actionBarDefaultIcon</i>, <i>actionBarDefaultTitle</i> and <i>actionBarDefaultSelector</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The orange underline shows “player_actionBarSubtitle”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  player_actionBarSelector: {
    text: `{{correctWriting}}, <i>player_actionBar</i>, <i>player_actionBarItems</i>, <i>player_actionBarTitle</i>, <i>player_actionBarSelector</i> set the same things <i>actionBarDefaultSelector</i>, <i>actionBarDefault</i>, <i>actionBarDefaultIcon</i>, <i>actionBarDefaultTitle</i> and <i>actionBarDefaultSubtitle</i> respectively do.`,
    image: {
      url: `http://telegra.ph/file/990707283fc6d4edb251d.png`,
      caption: `The blue circle shows “player_actionBarSelector”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-In-app-Music-Player-10-01#Action-bar`
  },
  chats_message: {
    text: `{{correctWriting}} sets the color of messages below the chat titles.`,
    image: {
      url: `http://telegra.ph/file/760da93bdf524a8dd6203.png`,
      caption: `The blue underline shows “chats_message”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Chats-List-09-29#General-variables`
  },
  divider: {
    text: `{{correctWriting}} sets the color of gray lines that divide items of lists.`,
    image: {
      url: `http://telegra.ph/file/8f84bd8b814d72bd52e3a.png`,
      caption: `The red area shows “divider”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Lists-09-26`
  },
  listSelectorSDK21: {
    text: `{{correctWriting}} sets the color of the ripple effect when you tap a list item. There was also listSelector variable that worked only on Android 4.4 and below and has been removed.`,
    image: {
      url: `http://telegra.ph/file/8f84bd8b814d72bd52e3a.png`,
      caption: `The blue area shows “listSelectorSDK21”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Lists-09-26`
  },
  emptyListPlaceholder: {
    text: `{{correctWriting}} sets the color of placeholder text — the text that you see if there's no content — when you open an empty list. You can see it in Chat screen → Attach — Music if you don't have any music. If you do, you can move them from the Music folder for a moment and move them back after you're done.`,
    image: {
      url: `http://telegra.ph/file/8f84bd8b814d72bd52e3a.png`,
      caption: `The green area shows “emptyListPlaceholder”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Lists-09-26`
  },
  avatar_text: {
    text: `{{correctWriting}} sets the color on the avatars background.`,
    url: `http://telegra.ph/Android-Theme-Variables-Guide-05-08#Avatars`
  },
  chats_date: {
    text: `{{correctWriting}} sets the time or date color in the top right corner of a chat.`,
    image: {
      url: `http://telegra.ph/file/760da93bdf524a8dd6203.png`,
      caption: `The orange underline shows “chats_date”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Chats-List-09-29#General-variables`
  },
  chats_nameMessage: {
    text: `{{correctWriting}} sets the sender name color in groups.`,
    image: {
      url: `http://telegra.ph/file/760da93bdf524a8dd6203.png`,
      caption: `The red underline shows “chats_nameMessage”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Chats-List-09-29#General-variables`
  },
  chats_actionMessage: {
    text: `{{correctWriting}} sets the color of texts like “You joined the channel” and also attached message type (like photo, GIF, video etc) if the sender name <i>is</i> omitted.`,
    image: {
      url: `http://telegra.ph/file/760da93bdf524a8dd6203.png`,
      caption: `The light green underline shows “chats_actionMessage”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Chats-List-09-29#General-variables`
  },
  chats_attachMessage: {
    text: `{{correctWriting}} sets the attached message type like photo, video, audio etc if the sender name <i>is not</i> omitted.`,
    image: {
      url: `http://telegra.ph/file/760da93bdf524a8dd6203.png`,
      caption: `The dark green line shows “chats_attachMessage”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Chats-List-09-29#General-variables`
  },
  chats_draft: {
    text: `{{correctWriting}} sets the “Draft” text color that appears when you type some text and then close the chat without sending it.`,
    image: {
      url: `http://telegra.ph/file/760da93bdf524a8dd6203.png`,
      caption: `The purple line shows ”chats_draft”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Chats-List-09-29#General-variables`
  },
}