import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import npm_package from './package.json';
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {
  return {
    entry: './index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json'],
      alias: npm_package._moduleAliases || {},
      modules: [
        path.join(__dirname, "src"),
        "node_modules"
      ],
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          enforce: 'pre',
          use: [
            'ts-loader',
            {
              loader: 'eslint-loader',
              options: {
                fix: isProduction,
                emitWarning: isDevelopment,
                failOnWarning: isProduction,
                configFile: '.eslintrc',
              },
            },
          ],
        },
        {
          test: /\.js/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
      new ExtractTextPlugin({
        filename: 'css/style.css',
      }),
    ],
  }
};
