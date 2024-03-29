const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
  root: pathDest,

  html: {
    src: `${pathSrc}/*.html`, // pathSrc + "/html/*.html"
    watch: `${pathSrc}/**/*.html`, // pathSrc + "/html/**/*.html"
    dest: pathDest,
  },
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest,
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css",
  },
  scss: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css",
  },
  js: {
    src: pathSrc + "/js/*.js",
    // views: pathSrc + "/js/views/*.js", // pathSrc + "/js/*.js"
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },
  img: {
    src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img",
  },
  fonts: {
    src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/fonts",
  },
  sprites: {
    src: pathSrc + "/img/svg-icons/*.svg",
    dest: pathDest + "/img",
  },
};
