// HTML Handling
const html = () => {
  return $.gulp
    .src($.path.html.src)
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
          title: 'HTML',
          message: error.message,
        })),
      })
    )
    .pipe($.gp.fileInclude())
    .pipe($.gp.replace(/@img\//g, 'img/'))
    .pipe($.gp.webpHtmlNosvg())
    .pipe($.gp.size({ title: 'Before minification' }))
    .pipe($.gp.htmlmin($.app.htmlMin))
    .pipe($.gp.size({ title: 'After minification' }))
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream());
};

module.exports = html;
