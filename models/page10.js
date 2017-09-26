const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page10Schema = new Schema({

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

const Page10 = mongoose.model('Page10', page10Schema);

module.exports = Page10;
