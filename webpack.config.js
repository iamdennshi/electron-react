const path = require("path");
// Для генерации html в который будет вставлен скрипт с именем сгенерированный webpack
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // Точка входа
  entry: "./src/main.jsx",
  // Куда записываем выход (абсолютный путь)
  output: {
    path: path.resolve(__dirname, "dist"),
    // Уникальное имя бандла чтобы избегать кеширование
    filename: "bundle.[contenthash].js",
  },
  // loader'ы трансформируют код перед тем как он попадает в готовый бандл
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: "babel-loader",
        // исключаем папку node_modules чтобы он не прогонял ее через babel
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    open: true,
  },
};
