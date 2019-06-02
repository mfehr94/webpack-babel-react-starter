const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: path.join(__dirname, "src", "index.html")
        }),
    ]
  }