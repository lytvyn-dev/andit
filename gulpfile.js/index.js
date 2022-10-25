global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
  path: require("./config/path.js"),
  app: require("./config/app.js"),
};

// Tasks
const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });

// Watch
const watcher = () => {
  // $.gulp.watch($.path.pug.watch, task.pug);
  $.gulp.watch($.path.html.watch, task.html);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.fonts.watch, task.fonts);
  // watch(path.css.watch, css).on("all", browserSync.reload);
};

const build = $.gulp.series(task.clear, $.gulp.parallel(task.html, task.scss, task.js, task.img, task.fonts, task.sprites));
const dev = $.gulp.series(build, $.gulp.parallel(watcher, task.server));

// Tasks exports
exports.html = task.html;
// exports.pug = task.pug;
// exports.css = task.css;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.fonts = task.fonts;
exports.sprite = task.sprites;

// Build
exports.default = $.app.isProd ? build : dev;
