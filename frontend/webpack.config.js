// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // Change this to 'production' for production environment
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
