module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx", ".js", ".jsx", ".ios.js", ".android.js"],
          alias: {
            "@": "./src",
          },
        },
      ],
      "nativewind/babel",
    ],
  };
};
