module.exports = {
  entry:{
    main: [
      './src/main.js'
    ]
  }
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}