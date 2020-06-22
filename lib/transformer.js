const fsPromises = require('fs').promises;

const transform = async(src) => {
  const contents = await fsPromises.readFile(src, { encoding: 'utf8' });
  return contents.replace(/([^a-z])/g, '')
    .toUpperCase()
    .split('').reverse().join('');
};

module.exports = {
  transform
};
