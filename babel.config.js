module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      //if you already have other plugin just paste this lines below
      [
        'module-resolver',
        {
          root: ['./*'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@shared': './src/shared',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
