module.exports = {
  config: {
    name: "fork",
    aliases: ["repo"],
    version: "1.1",
    author: "Aphelion",
    countDown: 3,
    role: 0,
    shortDescription: {
      en: "Get the official GitHub repository link"
    },
    longDescription: {
      en: "Returns the link to the official and up-to-date fork of the Aphelion GoatBot repository."
    },
    category: "system",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async ({ message }) => {
    return message.reply(
      "🔗 Source Repository:\nhttps://github.com/starboy-aphelionX/Aphelion-GoatBot.git"
    );
  }
};
