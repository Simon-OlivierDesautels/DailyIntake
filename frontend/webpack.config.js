const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "app/js/Main.js"),
  },
  devtool:'source-map',
  output: {
    path: path.resolve(__dirname, "../website/static/js"),
    filename: "[name].js",
    clean:true
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../website/static/js"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    port: 3000,
    hot:false,
    compress: true,
  },
};
