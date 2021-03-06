const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        index :'./lib/index.tsx'
    },

    resolve:{
        extensions:['.ts','.tsx','.js','.jsx'],
        // alias:{
        //     stylesheets:path.resolve(__dirname,'stylesheets'),
        //     example:path.resolve(__dirname,'example'),
        //     lib:path.resolve(__dirname,'lib')
        // },
        // modules:[path.resolve(__dirname,'include'),'node_modules']
    },
    
    output:{
        path: path.resolve(__dirname,'dist/lib'),
        library:'VaReactUi',
        libraryTarget:'umd',
    },

    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader:'awesome-typescript-loader'
            },
            {
                test:/\.svg$/,
                loader:'svg-sprite-loader'
            },
            {
                test: /\.s([ac])ss$/,
                use: ["style-loader", "css-loader",  "sass-loader", ]
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [
                        {
                            loader: 'file-loader',
                                options: {
                                    esModule: false,
                                    name: '[name]', //[path] 上下文环境路径
                                    publicPath: './assets/image/', //公共路径
                                    outputPath: 'assets/image/', //输出路径                             
                                } 
                            } 
                    ]
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    }
} 