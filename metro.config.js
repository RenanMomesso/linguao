const {
  getDefaultConfig: getRNDefaultConfig,
  mergeConfig,
} = require('@react-native/metro-config');
const {getDefaultConfig: getExpoDefaultConfig} = require('expo/metro-config');

module.exports = (() => {
  // Get the default React Native and Expo configurations
  const rnConfig = getRNDefaultConfig(__dirname);
  const expoConfig = getExpoDefaultConfig(__dirname);

  // Merge the React Native and Expo configurations
  let mergedConfig = mergeConfig(rnConfig, expoConfig);

  // Apply additional configurations for react-native-svg-transformer
  const {transformer, resolver} = mergedConfig;

  mergedConfig.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  mergedConfig.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return mergedConfig;
})();
