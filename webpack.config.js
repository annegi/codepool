var path = require("path");
module.exports = {
    entry: './src/views/react/Git_Hub_Card_Api.jsx',
    output: {path: __dirname+'/public/scripts', filename: 'codepool-react-bundle.js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};