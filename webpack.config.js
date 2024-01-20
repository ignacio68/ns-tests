const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  // webpack.chainWebpack((config) => {
  //   config.module
  //     .rule("rnmodules")
  //     // Replace the `react-native-module` part with the module you installed.
  //     .include.add(/node_modules(.*[/\\])+react-native-webview/)
  //     // Or for modules such as @react-native-community/module-name use the following regex.
  //     // .include.add(/node_modules(.*[/\\])+@module-org\/module-name/)
  //     .end()
  //     .use("babel-loader")
  //     .before("ts-loader")
  //     .loader("babel-loader")
  //     .options({
  //       babelrc: false,
  //       presets: ["module:metro-react-native-babel-preset"]
  //     });
  // });

  return webpack.resolveConfig();
};
