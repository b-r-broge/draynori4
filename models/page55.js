const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page55Schema = new Schema({

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

const Page55 = mongoose.model('Page55', page55Schema);

module.exports = Page55;
