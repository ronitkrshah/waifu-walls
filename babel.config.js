module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-transform-export-namespace-from'],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './src',
        },
      },
    ],
    ['react-native-paper/babel'],
    ['react-native-reanimated/plugin'],
  ],
};
