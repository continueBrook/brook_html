const path = require('path');
const htmlWebpackPligin = require('html-webpack-plugin');
module.exports = {
    entry:{
        'main1':'./src/main.js'
    },
    output:{
        filename:'./build.js',
        path:path.resolve('./dist')
    },
    watch:true,
    plugins:[
        new htmlWebpackPligin({
            template:'./src/index.html' 
        })
    ],
    //声明模块，内部包含着loader
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(jpg|png|svg)$/,loader:'file-loader?limit=506999'},
            {test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
            {test:/\.js$/,loaders:'babel-loader',
            exclude:/node_modules/, 
            options:{
                presets:['env'],//处理关键字
                plugins:['transform-runtime']//处理函数
            }},
            {test:/.vue$/,loader:'vue-loader'}
        ]
    }
}