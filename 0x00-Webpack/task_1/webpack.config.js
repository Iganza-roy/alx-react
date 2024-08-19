const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Entry point for your JS
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  mode: 'production', // Set mode to production
  module: {
    rules: [
      {
        test: /\.js$/, // Process .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
