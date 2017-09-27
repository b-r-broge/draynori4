const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page86Schema = new Schema({

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

const Page86 = mongoose.model('Page86', page86Schema);

module.exports = Page86;
