require('dotenv').config();

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const { randomMovies } = require('../lib/data-helpers/seed');


// const request = require('supertest');
// const app = require('../lib/app');

// const Movie = require('../lib/models/Movie');
// const Review = require('../lib/models/Review');

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
});





