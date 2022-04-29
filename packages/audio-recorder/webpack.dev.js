const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let config = {
    // 入口
    entry: path.join(__dirname, "./example/index.tsx"),
    devtool: "source-map",
    devServer: {
        contentBase: "./example",
        open: false,
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./demo"),
    },
    module: {
        // unknownContextCritical : false,
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.worker\.(ts|js)$/,
                use: { loader: "worker-loader" },
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: "url-loader?limit=8192",
            },
            {
                test: /\.(ttf|eot|woff|woff2|mp3|wav)$/,
                loader: "file-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".tsx", ".ts", ".json", ".mp3", ".wav"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "example/example.html"),
            filename: "index.html",
            inject: true,
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = (env, argv) => {
    if (argv.mode === "development") {
        // 移动端下增加 vconsole 调试
        // config.entry.vconsole = path.resolve(__dirname, 'example/vconsole.ts');
        // 开发模式下增加 example
        // config.entry.example = path.resolve(__dirname, 'example/example.ts');
        // config.entry.example = path.resolve(__dirname, 'example/index.tsx');
        // 开发模式下才要用到html
    }

    return config;
};
