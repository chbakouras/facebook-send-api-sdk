module.exports = {
    output: {
        library: "fbSendApiSdk",
        libraryTarget: "umd",
        filename: "fbSendApiSdk.js"
    },
    devtool: "#inline-source-map",
    externals: [
        {
            request: {
                root: "request",
                commonjs: "request",
                commonjs2: "request",
                amd: "request"
            },
            "request-promise": {
                root: "request-promise",
                commonjs: "request-promise",
                commonjs2: "request-promise",
                amd: "request-promise"
            }
        }
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    compact: false
                }
            }
        ]
    }
};
