const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({},base,{
    mode:'production',
    entry:{
        example: './example.tsx'
    },
    externals:{ 
        react:{
            commonjs:'react',
            commonjs2:'react',
            amd:'react',
            root:'React'
        },
        'react-dom':{
            commonjs:'react-dom',
            commonjs2:'react-dom2',
            amd:'react-dom',
            root:'ReactDOM'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
            filename: 'index.html'
        })
    ]
} )
