const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page64Schema = new Schema({

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

const Page64 = mongoose.model('Page64', page64Schema);

module.exports = Page64;
