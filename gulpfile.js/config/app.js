const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlMin: {
    collapseWhitespace: isProd,
  },
  // pug: {
  //   pretty: isDev,
  //   data: {
  //     test: require(`../../src/data/test.json`),
  //   },
  // },
  webpack: {
    mode: isProd ? "production" : "development",
  },
  imagemin: {
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    interlanced: true,
    optimizationLevel: 3,
    verbose: true,
  },
  fonter: {
    formats: ["ttf", "woff"],
  },
  autoprefixer: {
    grid: true,
    cascade: true,
  },
  sprites: {
    mode: {
      stack: {
        sprite: "../icons/icons.svg",
        // example: true,
      },
    },
  },
};
