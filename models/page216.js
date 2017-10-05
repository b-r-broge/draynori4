const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page216Schema = new Schema({

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

const Page216 = mongoose.model('Page216', page216Schema);

module.exports = Page216;
