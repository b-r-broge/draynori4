const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page5Schema = new Schema({

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

const Page5 = mongoose.model('Page5', page5Schema);

module.exports = Page5;
