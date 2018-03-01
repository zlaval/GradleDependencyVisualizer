const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: [/node_modules/],
                loader: "babel-loader",
                test: /\.js$/
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['app'],
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    }

};