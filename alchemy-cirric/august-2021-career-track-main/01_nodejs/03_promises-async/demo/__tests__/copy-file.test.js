const { stat, rm } = require('fs/promises');
const copyFile = require('../lib/copy-file');

describe('copyFile', () => {
  const dest = './__tests__/dest/file1.txt';
  const source = './__tests__/source/file1.txt';

  beforeEach(() => {
    return rm(dest, { force: true });
  });

  afterAll(() => {
    return rm(dest, { force: true });
  });

  it('should copy a file', async () => {
    await copyFile(source, dest);
    const fileStats = await stat(dest);

    expect(fileStats.isFile()).toEqual(true);
  });

  it('should copy a file using .then', () => {
    return copyFile(source, dest)
      .then(() => stat(dest))
      .then((stats) => {
        expect(stats.isFile()).toEqual(true);
      });
  });
});
