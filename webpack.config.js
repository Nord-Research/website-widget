const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
var copyWebpackPlugin = require("copy-webpack-plugin");

const BUNDLE_OUTPUT_DIR = "./dist";

module.exports = env => {
  const IS_DEV_BUILD = !(env && env.prod);
  let keyFileSync = undefined,
    certFileSync = undefined;

  if (IS_DEV_BUILD) {
    keyFileSync = fs.readFileSync("./ssl/findme.tinkerantreats.key");
    certFileSync = fs.readFileSync("./ssl/findme.tinkerantreats.crt");
  }

  return [
    {
      entry: "./src/index.js",
      output: { filename: "widget.js", path: path.resolve(BUNDLE_OUTPUT_DIR) },
      devServer: {
        contentBase: BUNDLE_OUTPUT_DIR,
        allowedHosts: ["lp.nordresearch.com.br"],
        port: IS_DEV_BUILD ? 443 : undefined,
        https: IS_DEV_BUILD ? true : false,
        key: keyFileSync,
        cert: certFileSync
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
