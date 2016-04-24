var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: './src2/main.js',
  	output: {
    	filename: 'bundle.js',
    	path: './dest'
    },

    plugins: [new HtmlWebpackPlugin({
    	template: 'jade!./src2/index.jade'
    })]

};

