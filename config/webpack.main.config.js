module.exports = {
  entry: "./src/main/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json"
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};
