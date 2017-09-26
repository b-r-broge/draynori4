const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page29Schema = new Schema({

  text: {
    type: String,
    required: true,
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

const Page29 = mongoose.model('Page29', page29Schema);

module.exports = Page29;
