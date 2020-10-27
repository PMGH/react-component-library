const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "styleguide.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          { loader: "style-loader" },
          // Translates CSS into CommonJS
          { loader: "css-loader", options: { url: false } },
          // Compiles Sass to CSS
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
    ],
  },
};
