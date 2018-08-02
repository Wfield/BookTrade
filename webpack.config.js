const path= require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')

module.exports= {
	entry: {
		app: path.join(__dirname, '/src/index.js'),
		vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'react-bootstrap', 'react-router-bootstrap', 'prop-types']
	},
	output: {
		path: path.join(__dirname, '/static/dist'),
		filename: 'app.bundle.js',
		chunkFilename: 'vendor.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react', 'stage-3']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			}
		]
	},
	devtool: 'source-map',
	mode: 'development',
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
			chunks: ['vendor']
		})
	],
	devServer: {
		contentBase: './static',
		port: 8000,
		historyApiFallback: true,
		publicPath: '/dist/',
		proxy: {
			'/api/*': {
				target: 'http://localhost:9000',
				changeOrigin: true
			}
		}
	}
}