const setupFile = '<rootDir>/app/javascript/__tests__/test-setup.ts';
const supportFiles = '<rootDir>/app/javascript/__tests__/__support__';

module.exports = {
  'roots': [
    '<rootDir>/app/javascript',
  ],
  'transform': {
    '^.+\\.tsx?$': 'ts-jest',
  },
  'setupFiles': [setupFile],
  'testPathIgnorePatterns': ['/node_modules/', supportFiles, setupFile],
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    'mp3',
  ],
};
