/// <binding AfterBuild='Run - Development' />
var path = require("path");
const webpack = require('webpack');

module.exports = {
    mode:"development", // production
    entry: 
        [
            "./wwwroot/corejs/movie.js",
            "./wwwroot/corejs/main.js"
        ]
    ,
    output: {
        publicPath: "/js/",
        path: path.join(__dirname, "/wwwroot/js/"),
        //filename: "name.build.js",
        filename: "bundle.js",
        library: 'appGlobal'
    }
    //,
    //module: {
    //    loaders: [{
    //        exclude: /node_modules/,
    //        loader: "babel-loader",
    //        query: {
    //            presets: ["es2015", "stage-1"]
    //        }
    //    }]
    //}
};