const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // Disable during development
            },
          },
        ],
      },
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  devtool: 'inline-source-map',
};
