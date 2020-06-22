const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    timestamps: true
  }
});

module.exports = mongoose.model('Review', schema);
