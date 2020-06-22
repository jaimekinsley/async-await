const Chance = require('chance');
let chance = new Chance();

const Movie = require('../models/Movie');

const randomMovies = async(num) => {
  const movies = await Movie.create([...Array(num)].map(() => ({
    title: chance.string({ length: 10 }),
    description: chance.string({ length: 20 }),
    studio: chance.string({ length: 10 })
  })));
  return movies;
};

module.exports = {
  randomMovies
};
