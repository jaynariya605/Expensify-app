//entry point -> outputs
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css"})
process.env.NODE_ENV = process.env.NODE_ENV | 'development'
if( process.env.NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test'})
} else {
    require('dotenv').config({path: '.env.development'})
}
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode:'development',
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
        CSSExtract,
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGE_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGE_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
            'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),

        })
    ],
    devtool: 'eval-cheap-module-source-map',
    devServer:{
        watchFiles: path.join(__dirname, 'public'),
        historyApiFallback: true,
        allowedHosts: 'all'
    }
}


//loader
