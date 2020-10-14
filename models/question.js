const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
  answer: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);