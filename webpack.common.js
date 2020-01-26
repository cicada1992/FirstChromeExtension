const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pkg = require("./package.json");

const distDir = path.resolve(__dirname, "dist");

function copy(from, to, transform) {
  return { from, to, transform };
}

function transformManifest(content) {
  const manifest = JSON.parse(content);
  manifest.version = pkg.version;
  return JSON.stringify(manifest, null, 2);
}

module.exports = {
  mode: "none",
  entry: {
    background: "./src/background.ts",
    popup: "./src/index.tsx"
  },
  output: {
    path: distDir,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ["dist"] }),
    new HtmlWebpackPlugin({
      chunks: ["popup"],
      title: "employees-helper",
      template: "./assets/popup.html",
      filename: "popup.html"
    }),
    new CopyWebpackPlugin([
      copy(
        "./assets/manifest.template.json",
        "manifest.json",
        transformManifest
      ),
      copy("./assets/icon.png", "icon.png"),
      copy("./assets/styles.css", "styles.css"),
      copy("./assets/background.html", "background.html")
    ])
  ]
};
