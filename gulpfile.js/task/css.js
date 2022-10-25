// CSS
const css = () => {
  return $.gulp
    .src($.path.css.src, { sourcemaps: $.app.isDev })
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: "Css",
          message: error.message,
        })),
      })
    )
    .pipe($.gp.replace(/@img\//g, "img/"))
    .pipe($.gp.concat("style.css"))
    .pipe($.gp.cssImport())
    .pipe($.gp.webpCss())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.shorthand())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.size({ title: "style.css" }))
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    .pipe($.gp.rename({ suffix: ".min" }))
    .pipe($.gp.csso())
    .pipe($.gp.size({ title: "style.min.css" }))
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};

module.exports = css;
