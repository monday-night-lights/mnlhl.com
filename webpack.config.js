const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      static: path.resolve(__dirname, 'src/static/'),
    },
<<<<<<< HEAD
    fallback: {
      "https": require.resolve("https-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "stream": require.resolve("stream-browserify"),
      "url": require.resolve("url/"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "util": require.resolve("util/"),
      "process": require.resolve("process/browser"),
      "zlib": require.resolve("browserify-zlib"),
      "http": require.resolve("stream-http"),
      "assert": require.resolve("assert/"),
      "crypto": require.resolve("crypto-browserify"),
      "vm": require.resolve("vm-browserify")
    }
=======
>>>>>>> 4cbee1ce39e3a7265503094d7d6ec50d00ae6671
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Monday Night Lights Hockey League',
      favicon: "./src/static/img/favicon.ico",
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ]
  },
  output: {
    path: DIST,
    filename: 'bundle.js',
    clean: true
  },
  devServer: {
    static: DIST,
  },
};
