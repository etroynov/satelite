module.exports = {
  name: 'jsmine',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/jsmine',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
