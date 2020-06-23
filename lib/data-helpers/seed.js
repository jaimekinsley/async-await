const Chance = require('chance');
let chance = new Chance();

const Movie = require('../models/Movie');
const Review = require('../models/Review');

const randomMovies = async(num) => {
  const movies = await Movie.create([...Array(num)].map(() => ({
    title: chance.string({ length: 10 }),
    description: chance.string({ length: 20 }),
    studio: chance.string({ length: 10 })
  })));
  return movies;
};

const defaultSeed = async() => {
  const movies = await Movie.create([...Array(5)].map(() => ({
    title: chance.string({ length: 10 }),
    description: chance.string({ length: 20 }),
    studio: chance.string({ length: 10 })
  })));

  const reviews = await Review.create([...Array(100)].map(() => ({
    movie: chance.pickone(movies)._id,
    authorName: chance.string({ length: 20 }),
    comment: chance.string({ length: 20 })
  })));
  return reviews;
};

const seed = async({ movies = 5, reviews = 100 }) => {
  const createdMovies = await Movie.create([...Array(movies)].map(() => ({
    title: chance.string({ length: 10 }),
    description: chance.string({ length: 20 }),
    studio: chance.string({ length: 10 })
  })));

  const createdReviews = await Review.create([...Array(reviews)].map(() => ({
    movie: chance.pickone(createdMovies)._id,
    authorName: chance.string({ length: 20 }),
    comment: chance.string({ length: 20 })
  })));
  return createdReviews;
};

module.exports = {
  randomMovies,
  defaultSeed,
  seed
};
