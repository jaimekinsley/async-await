const fsPromises = require('fs').promises;

const copy = async(src, dst) => {
  const contents = await fsPromises.readFile(src, { encoding: 'utf8' });
  return fsPromises.writeFile(dst, contents);
};

module.exports = {
  copy
};
