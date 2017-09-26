const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page13Schema = new Schema({

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

const Page13 = mongoose.model('Page13', page13Schema);

module.exports = Page13;
