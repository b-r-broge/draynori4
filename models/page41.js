const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page41Schema = new Schema({

  text: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    // required: true,
  },
  option3: {
    type: String,
    // required: true,
  },

})

const Page41 = mongoose.model('Page41', page41Schema);

module.exports = Page41;
