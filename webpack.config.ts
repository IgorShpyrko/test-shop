import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import npm_package from './package.json';

module.exports = (env: {dev?: boolean, prod?: boolean}) => {
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
          test: /\.tsx?$/,
          enforce: 'pre',
          use: [
            'ts-loader',
            {
              loader: 'eslint-loader',
              options: {
                fix: env.prod,
                emitWarning: env.dev,
                failOnWarning: env.prod,
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
