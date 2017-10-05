const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page212Schema = new Schema({

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

const Page212 = mongoose.model('Page212', page212Schema);

module.exports = Page212;
