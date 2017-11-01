module.exports = {
  windowbackgroundwhite: {
    correctWriting: `windowBackgroundWhite`,
    text: `{{correctWriting}} establece el color de fondo en casi todos los apartados de Telegram exceptuando el fondo del chat. Por ejemplo, establece el fondo en la pantalla de la lista de chats o el fondo de las secciones en Configuración pero no lo aplica al fondo del chat. Esta variable también se establece en el panel inferior en el reproductor integrado en la aplicación.`,
    image: {
      url: `http://telegra.ph/file/718b0751753b0eb8109fe.png`,
      caption: `El área roja muestra “windowBackgroundWhite” `
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  windowbackgroundgray: {
    correctWriting: `windowBackgroundGray`,
    text: `{{correctWriting}} establece el color de fondo secundario entre los apartados de Configuración, divididos entre secciones. Por ejemplo, debajo del registro de llamadas si no tienes completa la lista de llamadas, se verá del color que establezcamos.`,
    image: {
      url: `http://telegra.ph/file/718b0751753b0eb8109fe.png`,
      caption: `El área verde muestra “windowBackgroundGray” `
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  chatwallpaper: {
    correctWriting: `chat_wallpaper`,
    text: `{{correctWriting}} establece fondo en la pantalla de chat, se pueden elegir o imágenes o colores sólidos. Esta variable solo es utilizable si el tema que has creado es solo para uso personal, ya que si compartes el tema añadiendo la imagen con esta variable, ésta no se incluirá en el tema.\n<b>Ten cuidado :</b> Si estableces una imagen como fondo de pantalla de chat con esta variable, lo que hace Telegram es comprimirlo cada vez que cambies cualquier variable con el editor. Por esta razón, debes configurar la imagen antes de compartir el tema.`,
    image: {
      url: `http://telegra.ph/file/3551fe61d10a903a38bfa.png`,
      caption: `Ejemplo de imagen y color como fondo de chats `
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Backgrounds-08-11`
  },
  graysection: {
    correctWriting: `graySection`,
    text: `{{correctWriting}} establece el color de fondo del encabezado como Contactos. El color del título de este encabezado deberia establecerse con windowBackgroumdWhiteGrayText2.`,
    image: {
      url: `http://telegra.ph/file/60edd69ecb22849add590.png`,
      caption: `El área roja muestra ”graySection”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Contacts-10-01`
  },
  windowbackgroundwhiteicon: {
    correctWriting: `windowBackgroundWhiteIcon`,
    text: `{{correctWriting}} establece el color de los iconos.`,
    image: {
      url: `http://telegra.ph/file/60edd69ecb22849add590.png`,
      caption: `El área verde muestra ”windowBackgroundWhiteIcon”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Contacts-10-01`
  },
  windowbackgroundwhiteblacktext: {
    correctWriting: `windowBackgroundWhiteBlackText`,
    text: `{{correctWriting}} establece el color de casi todos los textos de la aplicación.\n<b>Ten cuidado:</b> El color de los títulos del resultado de busqueda inline de cualquier bot tambien esta establecido mediante esta variable, aunque el fondo de los resultados no esta establecido por<i>windowBackgroundWhite</i> sino <i>chat_messagePanelBackground</i>. Considera establecer el color del fondo del panel de mensajes de la misma manera que<i>windowBackgroundWhite</i> o verifica la legibilidad de los resultados del bot.`,
    image: {
      url: `http://telegra.ph/file/87e5f1b5fe84efd52514c.png`,
      caption: `El área roja muestra “windowBackgroundWhiteBlackText”`
    },
    url: `http://telegra.ph/Android-Theming-Variables-Glossary-Text-08-11`
  },
}