const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Get the default configuration
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

// Define the custom configuration, including the transformer for SVG files
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'), // Exclude 'svg' from the default asset extensions
    sourceExts: [...sourceExts, 'svg'], // Include 'svg' in the source extensions
  },
};

// Merge the default config with the custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

module.exports = mergedConfig;
