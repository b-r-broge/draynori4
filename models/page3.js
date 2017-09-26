const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page3Schema = new Schema({

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

const Page3 = mongoose.model('Page3', page3Schema);

module.exports = Page3;
