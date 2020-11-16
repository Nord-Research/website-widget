const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
var copyWebpackPlugin = require("copy-webpack-plugin");

const BUNDLE_OUTPUT_DIR = "./dist";

module.exports = env => {
  const IS_DEV_BUILD = !(env && env.prod);

  return [
    {
      entry: "./src/index.js",
      output: { filename: "widget.js", path: path.resolve(BUNDLE_OUTPUT_DIR) },
      devServer: {
        contentBase: BUNDLE_OUTPUT_DIR,
        allowedHosts: ["lp.nordresearch.com.br"],
        port: 443,
        https: true,
        key: fs.readFileSync("./ssl/findme.tinkerantreats.key"),
        cert: fs.readFileSync("./ssl/findme.tinkerantreats.crt")
      },
      mode: IS_DEV_BUILD ? "development" : "production",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: { browsers: ["IE 11, last 2 versions"] },
                      useBuiltIns: "usage"
                    }
                  ]
                ],
                plugins: [
                  "@babel/proposal-class-properties",
                  "@babel/proposal-object-rest-spread",
                  [
                    "@babel/plugin-transform-react-jsx",
                    { pragma: "h", pragmaFrag: "Fragment" }
                  ]
                ]
              }
            }
          },
          { test: /\.html$/i, use: "html-loader" },
          {
            test: /\.css$/i,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  sourceMap: IS_DEV_BUILD
                }
              }
            ]
          }
        ]
      },
      optimization: { minimize: !IS_DEV_BUILD },
      plugins: IS_DEV_BUILD
        ? [
            new webpack.SourceMapDevToolPlugin(),
            new copyWebpackPlugin({ patterns: [{ from: "dev/" }] })
          ]
        : [],
      resolve: {
        extensions: ["*", ".js", ".jsx"]
      }
    }
  ];
};
