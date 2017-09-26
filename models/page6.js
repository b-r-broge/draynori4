const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page6Schema = new Schema({

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
  option4: {
    type: String,
    required: true,
  },

})

const Page6 = mongoose.model('Page6', page6Schema);

module.exports = Page6;
