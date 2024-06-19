module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
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
  ],
};
