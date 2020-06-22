const { transform } = require('../lib/transformer');

const fsPromises = require('fs').promises;

describe('tests a function', () => {
  beforeAll(() => {
    return fsPromises.writeFile('./transform-file.txt', 'someThing');
  });

  afterAll(() => {
    return fsPromises.unlink('./transform-file.txt');
  });

  it('can remove capitals, capitalize, and reverse with transform', async() => {
    const transformedString = await transform('./transform-file.txt');
    expect(transformedString).toEqual('GNIHEMOS');
  });
});

