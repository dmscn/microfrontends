const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/bundle"),
		filename: "index_bundle.js"
	},
	devServer: {
		port: 8081,
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)?$/,
				exclude: "/node_modules/",
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				},
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: ["file-loader"],
			},
			{
				test: /\.(jsx|js)?$/,
				exclude: /node_modules/,
				use: {
					loader: "eslint-loader",
				}
			},
			{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "products",
			filename: "remoteEntry.js",
			exposes: {
				"./Products": "./src/index",
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new Dotenv()
	]
}
