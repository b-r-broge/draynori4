const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page224Schema = new Schema({

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

const Page224 = mongoose.model('Page224', page224Schema);

module.exports = Page224;
