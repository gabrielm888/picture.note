const { override, addBabelPreset, addWebpackAlias, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
  // Add babel preset for JSX support
  addBabelPreset('@babel/preset-react'),
  
  // Include specific node modules for babel processing
  babelInclude([
    path.resolve(__dirname, 'src'), // Your source files
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'), // Include this package for processing
    path.resolve(__dirname, 'node_modules/@react-native'), // Include React Native packages
    path.resolve(__dirname, 'node_modules/react-native'), // Include core React Native
  ]),
  
  // Add important aliases for React Native Web
  addWebpackAlias({
    'react-native$': 'react-native-web',
    'react-native-vector-icons': 'react-native-vector-icons/dist',
  }),
  
  // Custom function for more complex config changes
  (config) => {
    // Ensure babel-loader processes the right files
    const rules = config.module.rules;
    const babelRule = rules.find(rule => rule.oneOf) || {};
    if (babelRule.oneOf) {
      const babelLoaderRule = babelRule.oneOf.find(rule => {
        return rule.loader && rule.loader.includes('babel-loader');
      });

      if (babelLoaderRule) {
        // Force jsx parsing for specified node modules
        babelLoaderRule.options.plugins = [
          ...(babelLoaderRule.options.plugins || []),
          '@babel/plugin-transform-react-jsx',
        ];
      }
    }
    
    return config;
  }
);
