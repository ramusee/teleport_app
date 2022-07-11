const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].js"
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(css|sass|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|svg)$/,
				use: ["file-loader"]
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		port: 3000,
	},
	plugins: [
		new HTMLWebpackPlugin({template: "./public/index.html"}),
		new CleanWebpackPlugin()
	],
	devtool: 'eval-source-map',
}