const BundleTracker = require("webpack-bundle-tracker"); // django webpack requirement
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const TerserPlugin = require("terser-webpack-plugin");

const autoprefixer = require("autoprefixer");
const path = require("path");

const paths = {
  src: {
    favicon: "./walk_up_effect/static/images/favicons",
    fonts: "./walk_up_effect/static/fonts",
    img: "./walk_up_effect/static/images",
    js: "./walk_up_effect/static/js",
    scss: "./walk_up_effect/static/sass",
    video: "./walk_up_effect/static/video",
  },
  bundle: {
    css: "./css",
    favicon: "./favicon",
    fonts: "./fonts",
    img: "./images",
    js: "./js",
    video: "./video",
  },
};

module.exports = {
  devtool: "source-map",
  context: __dirname,
  entry: {
    libs: [paths.src.scss + "/libs.scss"],
    theme: [paths.src.js + "/theme.js", paths.src.scss + "/theme.scss"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, paths.src.scss.slice(2)),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/](node_modules)[\\/].+\.js$/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  output: {
    path: path.resolve("./walk_up_effect/static/bundle/"),
    filename: paths.bundle.js + "/[name].bundle.js",
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: paths.src.favicon,
          to: paths.bundle.favicon,
        },
        {
          from: paths.src.fonts,
          to: paths.bundle.fonts,
        },
        {
          from: paths.src.img,
          to: paths.bundle.img,
        },
        {
          from: paths.src.video,
          to: paths.bundle.video,
        },
      ],
    }),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: paths.bundle.css + "/[name].bundle.css",
    }),
    new BundleTracker({ filename: "./webpack-stats.json" }),
  ],
};
