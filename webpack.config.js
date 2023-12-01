const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HTMLWebpackPlugin({
            hash: true, //Cache busting
            title: "Restaurant homepage",
            template: "./src/index.html",
            filename: "index.html",
            inject: "body",
        })
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true //Clean the dist directory before bundling
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
    mode: "development", //Change this to production when deploying
}

// Useful guide: https://www.codeinwp.com/blog/webpack-tutorial-for-beginners/#what-is-webpack