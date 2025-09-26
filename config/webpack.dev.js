const
    webpack = require("webpack"),
    { merge } = require("webpack-merge"),
    common = require("./webpack.config");

module.exports = merge(common, {
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                quietDeps: true,
                                silenceDeprecations: ['import']
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: [new webpack.HotModuleReplacementPlugin()],

    output: {
        publicPath: "/"
    },

    devtool: "eval",

    devServer: {
        hot: true,
        port: 8765,
        historyApiFallback: true
    }
});
