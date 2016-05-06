var path = require('path')
var webpack = require('webpack')
module.exports = {
    watch: true,
    entry: {
        'index': 'index',
        'vendor': ['react', 'redux', 'react-redux']        
    },
    output: {
        path: path.join(__dirname, 'public/js/dest'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", '.es6'],
        root: path.join(__dirname, '/public/js/src/'),
        modulesDirectories: ["node_modules"]
    }
}