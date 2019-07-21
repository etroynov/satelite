module.exports = {
  name: 'jsbook',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/jsbook',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
