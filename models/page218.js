const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page218Schema = new Schema({

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

const Page218 = mongoose.model('Page218', page218Schema);

module.exports = Page218;
