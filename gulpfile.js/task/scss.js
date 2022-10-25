// Plugins
const sass = require("gulp-sass")(require("sass"));

// CSS
const scss = () => {
  return $.gulp
    .src($.path.scss.src, { sourcemaps: $.app.isDev })
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: "SCSS",
          message: error.message,
        })),
      })
    )
    .pipe($.gp.replace(/@img\//g, "../img/"))
    .pipe($.gp.sassGlob())
    .pipe(sass())
    .pipe($.gp.webpCss())
    .pipe($.gp.autoprefixer($.app.autoprefixer))
    .pipe($.gp.shorthand())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.size({ title: "style.css" }))
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.gp.rename({ suffix: ".min" }))
    .pipe($.gp.csso())
    .pipe($.gp.size({ title: "style.min.css" }))
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};

module.exports = scss;
