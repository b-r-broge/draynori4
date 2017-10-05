const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page219Schema = new Schema({

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

const Page219 = mongoose.model('Page219', page219Schema);

module.exports = Page219;
