const path = require("path");
const merge = require("webpack-merge");
const ZipPlugin = require("zip-webpack-plugin");
const Crx = require("webpack-crx");

const common = require("./webpack.common");
const pkg = require("./package.json");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new ZipPlugin({
      path: path.join(__dirname, "out"),
      filename: `employees-helper-${pkg.version}.zip`
    }),
    new Crx({
      keyFile: "assets/dist.pem",
      src: path.join(__dirname, "dist"),
      dest: path.join(__dirname, "out"),
      name: `employees-helper-${pkg.version}`
    })
  ]
});
