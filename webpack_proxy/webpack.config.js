/* eslint-disable no-undef */
const path = require('path');

let conf = {
	entry: './src/scripts.js',
	output: {
		path: path.resolve(__dirname, './js'),
		filename: 'main.js',
		publicPath: '/js'
	},
	devServer: {
        overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	}
};

module.exports = (env, options) => {
    conf.devtool = options.mode === 'production' ? 
        false : 
        'eval-cheap-module-source-map';
    return conf;
};