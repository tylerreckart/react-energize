const path = require('path');

module.exports = {
  entry: ["./example/src/index.js"],

  devServer: {
    contentBase: path.join(__dirname, "example"),
    compress: true,
    port: 8080
  },

  output: {
    path: path.resolve(__dirname, "./example/build"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

