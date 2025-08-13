module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.svg', '.jpg', '.txt', '.png', '.json'],
        alias: {
          '@libs': './src/libs',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@api': './src/api',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
