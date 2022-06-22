const { resolve } = require("path");

module.exports = {
  webpack: {
    alias: {
      "@containers": resolve(__dirname, "src", "containers"),
      "@components": resolve(__dirname, "src", "components"),
      "@core": resolve(__dirname, "src", "core"),
      "@hooks": resolve(__dirname, "src", "hooks"),
      "@modules": resolve(__dirname, "src", "modules"),
      "@utils": resolve(__dirname, "src", "utils"),
      "@i18n": resolve(__dirname, "src", "i18n"),
      "@workers": resolve(__dirname, "src", "workers"),
      "@pages": resolve(__dirname, "src", "pages"),
    },
  },
};
