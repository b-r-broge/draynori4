const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page227Schema = new Schema({

  text: {
    type: String,
    // required: true,
  },
  option1: {
    type: String,
    // required: true,
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

const Page227 = mongoose.model('Page227', page227Schema);

module.exports = Page227;
