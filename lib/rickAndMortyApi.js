const request = require('superagent');

// export a function getCharacter that takes an id and returns a promise that resolves to a character
// return only the characters name, status, and species

const getCharacter = async id => {
  const { body } = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
  return {
    id: body.id,
    name: body.name,
    status: body.status,
    species: body.species
  };
};

// export a function getManyCharacters that takes an array of ids and returns a promise that resolves with an array of characters
const getManyCharacters = async arr => {
  return await Promise.all(arr.map((id) => getCharacter(id)));
};

module.exports = {
  getCharacter,
  getManyCharacters
};
