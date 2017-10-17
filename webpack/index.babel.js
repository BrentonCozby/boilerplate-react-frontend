import { resolve } from 'path'
import { DefinePlugin } from 'webpack'
import merge from 'webpack-merge'
import HtmlPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import * as config from '../config.js'
import devConfig from './dev.js'
import prodConfig from './prod.js'

const TARGET = process.env.npm_lifecycle_event
const env = (TARGET === 'dev') ? 'dev' : 'prod'

let common = {
    output: {
        path: config.Dir.dist,
        publicPath: config.PP
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[path][name].[ext]'
                    }
                }
            }, {
                test: /\.(pug)$/,
                use: ['pug-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: resolve(config.Dir.views, 'pages', 'index.pug'),
            ...config
        }),
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            },
            PP: JSON.stringify(config.PP)
        }),
        new CopyPlugin([
            {from: config.Dir.static, to: config.Dir.dist}
        ])
    ],
    resolve: {
        modules: [
            config.Dir.src,
            'node_modules'
        ]
    }
}

let webpackConfig

if(env === 'dev') {
    webpackConfig = merge(common, devConfig)
}

if(env === 'prod') {
    webpackConfig = merge(common, prodConfig)
}

export default webpackConfig
