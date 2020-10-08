const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"},
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./build"),
        publicPath: "/build"
    },
    devtool: ("development") ? "source-map" : "none",
    devServer: {
        stats: "errors-only",
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader , "css-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}