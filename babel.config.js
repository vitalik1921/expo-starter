module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx", ".js", ".jsx", ".ios.js", ".android.js"],
          alias: {
            "@app": "./src",
          },
        },
      ],
      "nativewind/babel",
      "expo-router/babel",
    ],
  };
};
