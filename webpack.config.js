var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
      // new HtmlWebpackPlugin()
      new HtmlWebpackPlugin({
        title: 'Custom template',
        template: 'foo.html', // Load a custom template (lodash by default see the FAQ for details)
      })
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
            test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            },
            {
                   test: /\.html$/,
                   loader: 'html-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
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
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        inline: true,
        stats: 'errors-only'
    }
};
