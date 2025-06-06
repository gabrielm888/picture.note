module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react", 
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-transform-export-namespace-from",
    "babel-plugin-transform-remove-console",
    ["module-resolver", {
      "root": ["./src"],
      "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
    }]
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  },
  // This is the key fix - we need to make sure node_modules are processed by babel
  // Specifically for react-native-vector-icons
  ignore: [
    "node_modules/!(react-native|react-native-vector-icons|@react-native)/**"
  ]
}
