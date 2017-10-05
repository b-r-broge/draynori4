const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page208Schema = new Schema({

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

const Page208 = mongoose.model('Page208', page208Schema);

module.exports = Page208;
