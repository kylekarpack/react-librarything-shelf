const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		library: "",
		libraryTarget: "commonjs",
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader",
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true, // true outputs JSX tags
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules|bower_components|dist|.*\.spec\.js)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	externals: {
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React",
		},
		"react-dom": {
			root: "ReactDOM",
			commonjs2: "react-dom",
			commonjs: "react-dom",
			amd: "react-dom",
			umd: "react-dom",
		},
	},
};
