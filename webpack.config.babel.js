import { resolve } from 'path';

module.exports = {
  entry: {
    app: './src/client/index.js'
  },

  output: {
    filename: '[name].dist.js',
    path: resolve(__dirname, 'dist/client')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
