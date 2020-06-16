const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      /* Aqui van los loaders */
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        }),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({ 
          use: ["css-loader", "sass-loader"]
        }),
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
    
  plugins: [
    // Aqui van los plugins
    new ExtractTextPlugin("css/[name].css"),
    new BrowserSyncPlugin({
        proxy: '',
        port: 3000,
        files: [
            '**/*.php'
        ],
    })
  ]
}