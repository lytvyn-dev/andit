const del = require("del");

// Clear
const clear = () => {
  return del($.path.root);
};

module.exports = clear;
