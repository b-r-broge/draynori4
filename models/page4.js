const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page4Schema = new Schema({

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

const Page4 = mongoose.model('Page4', page4Schema);

module.exports = Page4;
