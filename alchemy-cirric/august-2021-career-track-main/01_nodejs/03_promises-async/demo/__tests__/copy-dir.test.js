const { readdir, rm } = require('fs/promises');
const copyDir = require('../lib/copy-dir');

describe('copyDir', () => {
  const dest = './__tests__/dest/dir-copy';

  beforeEach(() => {
    return rm(dest, { force: true, recursive: true });
  });

  afterAll(() => {
    return rm(dest, { force: true, recursive: true });
  });

  it('should copy a directory and its contents', () => {
    const source = './__tests__/source/dir';

    return copyDir(source, dest)
      .then(() => readdir(dest))
      .then((files) => {
        expect(files).toEqual(['file1.txt', 'file2.txt', 'file3.txt']);
      });
  });
});
