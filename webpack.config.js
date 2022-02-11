const path = require('path')


const config = {
    entry: path.resolve(__dirname,'src/index.jsx'),
    output:{
        path: path.join(__dirname, '/public'),
        filename: 'js/main.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}

module.exports = config;
