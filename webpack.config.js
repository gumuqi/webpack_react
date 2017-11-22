var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH  = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
console.log(ROOT_PATH);
console.log(SRC_PATH);
console.log(BUILD_PATH);
module.exports = {
	entry: {
		app: path.resolve(SRC_PATH, 'app.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	//凯迪dev source map
	devtool: 'eval-source-map',
	//开启webpack dev server
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loaders: ['babel-loader'],
			include: SRC_PATH
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My first react app'
		})
	],
	resolve: {
		
	}
}