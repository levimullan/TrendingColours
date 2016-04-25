var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: './src2/main.js',
  	output: {
    	filename: 'bundle.js',
    	path: './dest'
    },

    plugins: [new HtmlWebpackPlugin({
    	template: 'jade!./src2/index.jade'
    })],

    module: {
    	loaders: [
      	// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      		{ test: /\.tsx?$/, loader: 'ts-loader' }
    	]
  	}

};

