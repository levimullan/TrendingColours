var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    
    entry: './src/main.ts',
  	output: {
    	filename: 'bundle.js',
    	path: './dest'
    },

    plugins: [new HtmlWebpackPlugin({
    	template: './src/index.jade'
    })],

    module: {
    	loaders: [
      	// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      		{ test: /\.ts$/, loader: 'ts-loader' },
      		{ test: /\.scss$/, loader: 'style!css-loader!sass' },
      		{ test: /\.jade$/, loader: 'jade-loader' }
    	]
  	}
};


