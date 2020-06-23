// require('dotenv').config();

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const { randomMovies, defaultSeed, seed } = require('../lib/data-helpers/seed');

describe('seed data', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });

  it('creates 5 random movies', async() => {
    let movies = await randomMovies(5);
    expect(movies).toHaveLength(5);
  });

  it('creates 5 random movies and 100 random reviews by default', async() => {
    let randomData = await defaultSeed();
    expect(randomData).toHaveLength(100);
  });

  it('takes in an object and creates 2 random movies and 20 random reviews', async() => {
    let seedData = await seed({ movies: 2, reviews: 20 });
    expect(seedData).toHaveLength(20);
  });

});






