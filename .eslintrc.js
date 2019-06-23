module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceMap: "module"
  },
  extends: [
    "plugin:vue/essential",
    "standard"
  ],
  rules: {}
}