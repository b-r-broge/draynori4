const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page58Schema = new Schema({

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

const Page58 = mongoose.model('Page58', page58Schema);

module.exports = Page58;
