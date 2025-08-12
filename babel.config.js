module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@libs': './src/libs',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
