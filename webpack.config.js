//entry point -> outputs
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css"})

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode:'production',
    module : {
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [  MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            

        }]
    },
    plugins:[
        CSSExtract
    ],
    devtool: 'source-map',
    devServer:{
        watchFiles: path.join(__dirname, 'public'),
        historyApiFallback: true,
        allowedHosts: 'all'
    }
}


//loader
