module.exports = {
  windowBackgroundWhite: {
    text: `{{correctWriting}} imposta lo sfondo di quasi tutte le schermate tranne lo sfondo delle chat. Per esempio imposta lo sfondo nella lista delle chat o lo sfondo delle sezioni nella pagina delle Impostazioni. Inoltre questa variabile imposta il pannello in basso al lettore musicale di Telegram.`,
    image: {
      url: `http://telegra.ph/file/718b0751753b0eb8109fe.png`,
      caption: `L'area rossa mette in evidenza "windowBackgroundWhite", l'area rossa invece "windowBackgroundGray"`
    },
    url: `http://telegra.ph/Glossario-variabili-per-temi-di-Telegram-Backgrounds-10-09`
  },
  windowBackgroundGray: {
    text: `{{correctWriting}} imposta lo sfondo secondario presente ad esempio nelle Impostazioni tra le sezioni oppure nel registro delle chiamate se queste non riempono lo schermo`,
    image: {
      url: `http://telegra.ph/file/718b0751753b0eb8109fe.png`,
      caption: `L'area rossa mette in evidenza "windowBackgroundWhite", l'area rossa invece "windowBackgroundGray"`
    },
    url: `http://telegra.ph/Glossario-variabili-per-temi-di-Telegram-Backgrounds-10-09`
  },
  chat_wallpaper: {
    text: `{{correctWriting}} imposta lo sfondo delle chat, che sia un file immagine o un colore. <b>Devi cambiare questa variabile</b> così che Telegram possa includere il tuo sfondo nel tuo tema. Cambiare lo sfondo da Impostazioni → Sfondo chat <b>non</b> lo includerà nel tuo tema.\n<b>Nota bene:</b> se imposti un immagine come sfondo, esso verrà compresso da Telegram ogni volta che esegui una modifica ad una qualsiasi variabile nell'editor in-app. Per questa ragione devi impostare la tua immagine di nuovo prima di condividere il tema.`,
    image: {
      url: `http://telegra.ph/file/45a4c02712d0e78a8f9b1.png`,
      caption: `Esempio di un immagine (sinistra) e di un colore (destra) come sfondo delle chat`
    },
    url: `http://telegra.ph/Glossario-variabili-per-temi-di-Telegram-Backgrounds-10-09`
  },
  windowBackgroundWhiteBlackText: {
    text: `{{correctWriting}} imposta il colore di quasi tutti i testi in Telegram.\n<b>Nota bene:</b> questa variabile imposta il colore dei titoli dei risultati dei bot inline sebbene lo sfondo dei risultati non viene impostato da <i>windowBackgroundWhite</i> ma da <i>chat_messagePanelBackground</i>. È consigliato impostare lo sfondo del pannello messaggi dello stesso colore di <i>windowBackgroundWhite</i> oppure controlla la leggibilità dei risultati dei bot.`,
    image: {
      url: `http://telegra.ph/file/7484346dfae8e1bb8e96d.png`,
      caption: `L'area rossa mostra "windowBackGroundWhiteBlackText"`
    },
    url: `http://telegra.ph/Glossario-delle-variabili-per-temi-di-Telegram-Testi-10-10`
  },
  avatar_text: {
    text: `{{correctWriting}} imposta il colore del testo che compare negli avatar degli utenti che non hanno/non è stata caricata un'immagine del profilo`,
    url: `http://telegra.ph/Glossario-variabili-per-temi-di-Telegram-10-09#Avatars`
  },
}