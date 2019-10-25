import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import npm_package from './package.json';

export default (env: {dev?: boolean; prod?: boolean}) => {
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
        path.join(__dirname, 'src'),
        'node_modules',
      ],
    },
    node: {
      fs: "empty"
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
                configFile: '.eslintrc.json',
              },
            },
          ],
        },
        {
          test: /\.js/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
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
  };
};
