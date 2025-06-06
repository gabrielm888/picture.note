module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      ['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3 }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-transform-export-namespace-from',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.web.js', '.web.tsx'],
          alias: {
            'react-native': 'react-native-web',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['transform-remove-console']
      }
    }
  };
};
