// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require("expo/metro-config");
/** @type {import('expo/metro-config').MetroConfig} */

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.

  isCSSEnabled: true,
});

const { transformer, resolver } = config;

// Expo 49 issue: default metro config needs to include "mjs"
// https://github.com/expo/expo/issues/23180
resolver.sourceExts.push("mjs");

// add svg support
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

module.exports = config;
