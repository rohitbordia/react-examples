var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ProgressPlugin = require("webpack/lib/ProgressPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var outputFolder = "dist";

var LoaderOptionsPlugin = require("webpack").LoaderOptionsPlugin;

var CommonsChunkPlugin = require("webpack").optimize.CommonsChunkPlugin;

var DefinePlugin = require("webpack").DefinePlugin;

var extractCSS = new ExtractTextPlugin({
    "filename": "css/[name].css",
    "disable": true
});

var nodeModules = path.join(process.cwd(), "node_modules");
var entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];

module.exports = {
    entry: {
        main: [
            path.join(process.cwd(), "src", "index.tsx")
        ],
        polyfills: [
            path.join(process.cwd(), "src", "polyfills.tsx")
        ]
    },
    "output": {
        "path": path.join(process.cwd(), outputFolder),
        "filename": "[name].bundle.js",
        "chunkFilename": "[id].chunk.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "babel-loader!awesome-typescript-loader"
            },

            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(woff?2|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit=100000!file-loader'
            }
        ]
    },
    "plugins": [
        new CommonsChunkPlugin({
            "name": "inline",
            "minChunks": null
        }),
        new CommonsChunkPlugin({
            "name": "vendor",
            "minChunks": (module) => module.resource && module.resource.startsWith(nodeModules),
            "chunks": [
                "main"
            ]
        }),
        new ProgressPlugin(),
        extractCSS,
        new LoaderOptionsPlugin({
            "sourceMap": false,
            "options": {
                "postcss": [
                    autoprefixer()
                ],
                "sassLoader": {
                    "sourceMap": false,
                    "includePaths": []
                },
                "lessLoader": {
                    "sourceMap": false
                },
                "context": ""
            }
        }),
        new CopyWebpackPlugin([{
                from: path.join(process.cwd(), "node_modules", "bootstrap", "dist", "css", "bootstrap.css"),
                to: path.join(process.cwd(), outputFolder, "assets", "css")
            },
            {
                from: path.join(process.cwd(), "node_modules", "bootstrap", "dist", "css", "bootstrap-theme.css"),
                to: path.join(process.cwd(), outputFolder, "assets", "css")
            },
            {
                from: path.join(process.cwd(), "src", "assets"),
                to: path.join(process.cwd(), outputFolder, "assets")
            },
            {
                from: path.join(process.cwd(), "src", "favicon.ico")
            },
            {
                from: path.join(process.cwd(), "package.json")
            }
        ], {
            ignore: ["**/.gitkeep"]
        }),
        new DefinePlugin({
            "typeof window": "\"object\""
        })
    ],
    node: {
        "fs": "empty",
        "global": true,
        "crypto": "empty",
        "tls": "empty",
        "net": "empty",
        "process": true,
        "module": false,
        "clearImmediate": false,
        "setImmediate": false
    }
};