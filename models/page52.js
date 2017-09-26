const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page52Schema = new Schema({

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

const Page52 = mongoose.model('Page52', page52Schema);

module.exports = Page52;
