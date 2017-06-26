var gulp = require("gulp");
var gutil = require("gulp-util");
var clean = require('gulp-rimraf');
var webpack = require("webpack");
var webpackConfig = require("./build/webpack-prod.config.js");

gulp.task("clean", [], function () {
  console.log("Clean all files in dist folder");
  return gulp.src("dist/*", {
    read: false
  }).pipe(clean());
});

gulp.task("build", ["clean"], function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err)
            throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build] Completed\n" + stats.toString({
            assets: true,
            chunks: false,
            chunkModules: false,
            colors: true,
            hash: false,
            timings: false,
            version: false
        }));
        callback();
    });
});