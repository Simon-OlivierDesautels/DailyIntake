const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const pathToDjango = "../website/static";
const webpack =  require('webpack');
const gulpWebpack =require('webpack-stream');
const plumber =require('gulp-plumber');

// Sass Task
function scssTask() {
  return src("app/scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest(`${pathToDjango}/css`, { sourcemaps: "." }));
}

// JavaScript Task
function jsTask() {
  return src("app/js/main.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest(`${pathToDjango}/js`, { sourcemaps: "." }));
}

// Watch Task
function watchTask() {
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask /*,jsTask, browsersyncReload*/)
  );
}


function scripts() {
  return src("app/js/**/*.js")
    .pipe(gulpWebpack(require('./app/js/webpack.config.js'), webpack))
    .pipe(dest(`${pathToDjango}/js`));
}


// Default Gulp task
exports.default = series(
  scssTask,
  // jsTask,
  /*parallel(browsersyncServe, runserver),*/
  watchTask
);
