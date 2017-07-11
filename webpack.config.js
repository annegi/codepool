var path = require("path");
module.exports = {
    entry: './src/views/react/Number_Game.jsx',
    output: {path: __dirname+'/public/scripts', filename: 'codepool-react-bundle.js'},
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react'],
                        plugins: [require('babel-plugin-transform-class-properties')]
                    }
                }
            }
        ]
    }


};