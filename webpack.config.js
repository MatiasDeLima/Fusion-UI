const path = require('path');

module.exports = {
  entry: '/index.js',  // O arquivo principal da sua biblioteca
  output: {
    filename: 'fusion-ui-library.js',  // O nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // A pasta de saída
    library: 'FusionUiLibrary', // Nome da biblioteca global
    libraryTarget: 'umd', // Tipo de biblioteca
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
