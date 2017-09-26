const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page75Schema = new Schema({

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

const Page75 = mongoose.model('Page75', page75Schema);

module.exports = Page75;
