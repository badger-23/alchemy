const { mkdir, rm } = require('fs/promises');
const SecretKeeper = require('../lib/SecretKeeper');

describe('SecretKeeper', () => {
  const rootDir = './__tests__/secrets';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() =>
      mkdir(rootDir, { recursive: true })
    );
  });

  it('should keep and tell a secret', () => {
    // SecretKeeper.yell();
    // SecretKeeper.keep() // throws error
    const keeper = new SecretKeeper(rootDir);
    const secret = 'oooh super secret....';

    return keeper
      .keep(secret)
      .then(() => keeper.tell())
      .then((actualSecret) => expect(actualSecret).toEqual(secret));
  });

  it('should return null if not told a secret', () => {
    const keeper = new SecretKeeper(rootDir);

    return keeper.tell().then((told) => expect(told).toEqual(null));
  });
});
