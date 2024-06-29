// babel.config.js
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@/components": "./src/components",
          "@/pages": "./src/pages",
          "@/services": "./src/services",
          "@/mockedData": "./src/mockedData",
          "@/assets": "./src/assets",
          "@/theme": "./src/theme",
          "@/utils": "./src/utils",
          "@/store": "./src/store",
          "@/navigation": "./src/navigation",
          "@/hooks": "./src/hooks",
          "@/layouts": "./src/layouts",
          "@/graphql": "./src/graphql",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
