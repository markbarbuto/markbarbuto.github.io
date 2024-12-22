const path = require('path')

module.exports = {
  devServer: {
    allowedHosts: "all",
  },
  css: {
    loaderOptions: {
      css: {
        url: false,
      },
      sass: {
        // This is the option for `sass-loader` v8 and above
        additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      const UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
      const publicDir = path.resolve(process.VUE_CLI_SERVICE.context, 'public').replace(/\\/g, '/');
      const escapePublicDir= publicDir.replace(UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
      args[0].patterns[0].globOptions.ignore = args[0].patterns[0].globOptions.ignore.map(i => i.replace(publicDir, escapePublicDir));
      return args;
  });
  }
};