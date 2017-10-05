const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page213Schema = new Schema({

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

const Page213 = mongoose.model('Page213', page213Schema);

module.exports = Page213;
