const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page36Schema = new Schema({

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

const Page36 = mongoose.model('Page36', page36Schema);

module.exports = Page36;
