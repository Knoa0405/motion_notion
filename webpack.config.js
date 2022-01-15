const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'bundle': './src/index.ts',
    'utils/types': './src/utils/types.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts', '.js','json'],
    alias : {
      utils: path.resolve(__dirname, 'src/utils'),
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath : '/',
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    open: true,
    https: true,
    port: 'auto',
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};