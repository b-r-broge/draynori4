const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page87Schema = new Schema({

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

const Page87 = mongoose.model('Page87', page87Schema);

module.exports = Page87;
