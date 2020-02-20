module.exports = {
    entry: './src/js/app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.min.js'
    },


    module: {
        rules: [
          {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
          },
          {
            test: /\.css$/,
            loaders: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(svg|gif|png|eot|woff|ttf)$/,
            loaders: [
              'url-loader'
            ]
          }
        ]
      }
    }
  