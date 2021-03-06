const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'development') {
	/* to use it for dev purpose only in production heroku we setup config on their cli */
	dotenv.config({ path: path.join(__dirname, '.env') });
}

module.exports = env => {
	const isProduction = env === 'production';
	//const CSSExtract = new ExtractTextPlugin('styles.css');
	return {
		entry: ['babel-polyfill', './src/app.js'],
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					loader: 'babel-loader', //for es6 & jsx features to browser understandable es5 code
					test: /\.js$/,
					exclude: /node_modules/,
				},
				{
					test: /\.s?css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: path.join(__dirname),
							},
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								url: false,
							},
						}, // to import css using '@import' and interprets to import/require
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						}, //to compile scss to css
					],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			})
		],
		// plugins: [CSSExtract],
		devtool: isProduction ? 'source-map' : 'inline-source-map', //build-rebuild for sourcemaps makes faster rebuild process

		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true, // to let webpack not to make http request to server with url route getting changed
			publicPath: '/dist/',
			port: '3000'
		},
	};
};

// 'style-loader', // inject css into the DOM
// 'css-loader', // to import css using '@import' and interprets to import/require
// //===//
// 'sass-loader', //to compile scss to css
// // use is for multiple loaders