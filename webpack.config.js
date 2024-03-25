

// const CompressionPlugin = require("compression-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { AngularWebpackPlugin } = require('@ngtools/webpack');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     mode: 'development',
//     entry: './src/main.ts',

//     resolve: {
//         extensions: ['.ts', '.js']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.html$/,
//                 use: 'html-loader'
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'],
//             },
//             {
//                 test: /\.ts$/,
//                 use: ['@ngtools/webpack', 'ts-loader'],
//                 exclude: /node_modules/
//             },
//             {
//                       test: /\.ts$/,
//                       use: 'ts-loader',
//                       exclude: /node_modules/
//                     },
//         ]
//     },
//     optimization: {
//         splitChunks: {
//             chunks: 'all',
//         },
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         }),
//         new CompressionPlugin({
//             test: /\.(js|ts|css)$/,
//             algorithm: 'gzip',
//             filename: '[path][base].gz',
//             threshold: 10240,
//             minRatio: 0.8
//         }),
//         new AngularWebpackPlugin({
//             tsconfig: './tsconfig.json',
//         }),
//         new MiniCssExtractPlugin(),
//     ],
// }

const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/,
                use: ['@ngtools/webpack', 'ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CompressionPlugin({
            test: /\.(js|ts|css)$/,
            algorithm: 'gzip',
            filename: '[path][base].gz',
            threshold: 10240,
            minRatio: 0.8
        }),
        new AngularWebpackPlugin({
            tsconfig: './tsconfig.json',
        }),
        new MiniCssExtractPlugin(),
    ],
}


