const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page65Schema = new Schema({

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

const Page65 = mongoose.model('Page65', page65Schema);

module.exports = Page65;
