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
