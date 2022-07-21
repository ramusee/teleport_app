const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].js",
		publicPath: '/',
	},
	plugins: [
		new HTMLWebpackPlugin({template: "./public/index.html"}),
		new CleanWebpackPlugin(),
		new Dotenv(),
	],
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/i,
				exclude: /\.module\.scss$/i,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								mode: "icss",
							},
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
			{
				test: /\.module\.scss$/i,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								mode: "local",
							},
						},
					},
					{
						loader: "sass-loader",
					},
				],
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
		historyApiFallback: true,
	},
	
	devtool: 'eval-source-map',
}