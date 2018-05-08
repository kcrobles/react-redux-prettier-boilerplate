const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');
	return {
		entry: './src/index.js',
		output: {
			path: path.join(__dirname, 'public', 'assets'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.jsx?$/,
					exclude: /node_modules/
				},
				{
					test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
					use: {
						loader: 'url-loader',
						options: {
							limit: 100000
						}
					}
				},
				{
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: !isProduction
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: !isProduction
								}
							}
						]
					})
				}
			]
		},
		plugins: [CSSExtract],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/assets/'
		}
	};
};
