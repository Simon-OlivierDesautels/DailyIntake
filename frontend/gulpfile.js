const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const pathToDjango = "../website/static";

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

// Browsersync Tasks
// function browsersyncServe(cb) {
//   browsersync.init({
//     notify: false,
//     port: 8000,
//     proxy: "localhost:8000",
//   });
//   cb();
// }

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask, jsTask/*, browsersyncReload*/)
  );
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  /*parallel(browsersyncServe, runserver),*/
  watchTask
);
