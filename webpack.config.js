const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".css", ".png", ".jpg", ".gif"],
    modules: [path.resolve("./src"), "node_modules"],
  },
};
