var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname+'/src', //current folder as the reference to the other paths
  entry: './js/script.js', //entry point for building scripts
  resolve: {
  extensions: ['', '.js', '.jsx']
  },
  module: {
  	loaders: [{
  			test:/\.js?$/,
  			exclude:/node_modules/,///(node_modules|bower_components)/
  			loader:'babel-loader',
  			query:
  			{
  				presets:['react','es2015','stage-0'],
          plugins: ["react-html-attrs","transform-decorators-legacy","transform-class-properties"]
  			}

  		},
       {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
  	]
  },
  output: {
    path: __dirname+'/src/', //save result in 'dist' folder
    filename: 'script.min.js'
  }
};


/*loaders: ['babel-loader', 'babel?presets[]=react,presets[]=es2015']*/