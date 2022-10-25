// PUG
const pug = () => {
  return $.gulp
    .src($.path.pug.src)
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: "Pug",
          message: error.message,
        })),
      })
    )
    .pipe($.gp.pug($.app.pug))
    .pipe($.gp.replace(/@img\//g, "img/"))
    .pipe($.gp.webpHtmlNosvg())
    .pipe($.gulp.dest($.path.pug.dest))
    .pipe($.browserSync.stream());
};

module.exports = pug;
