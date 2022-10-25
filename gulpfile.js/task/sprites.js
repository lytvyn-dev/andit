// Sprites
const sprites = () => {
  return $.gulp
    .src($.path.sprites.src)
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: "SVG Sprite",
          message: error.message,
        })),
      })
    )
    .pipe($.gp.svgSprite($.app.sprites))
    .pipe($.gulp.dest($.path.sprites.dest));
};

module.exports = sprites;
