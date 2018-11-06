module.exports = {
  'roots': [
    '<rootDir>/app/javascript',
  ],
  'transform': {
    '^.+\\.tsx?$': 'ts-jest',
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
};
