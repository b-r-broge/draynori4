const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page34Schema = new Schema({

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

const Page34 = mongoose.model('Page34', page34Schema);

module.exports = Page34;
