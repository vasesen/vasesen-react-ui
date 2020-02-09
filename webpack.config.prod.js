const base = require('./webpack.config')

module.exports = Object.assign({},base,{
    mode:'production',
    entry:{
        ...base.entry,
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
            template: 'index.html',
            filename: 'index.html'
        })
    ]
} )
