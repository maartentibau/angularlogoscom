module.exports = {
  name: 'angularlogos',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angularlogos',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
