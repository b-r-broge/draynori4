const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page69Schema = new Schema({

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

const Page69 = mongoose.model('Page69', page69Schema);

module.exports = Page69;
