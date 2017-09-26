const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page24Schema = new Schema({

  text: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },

})

const Page24 = mongoose.model('Page24', page24Schema);

module.exports = Page24;
