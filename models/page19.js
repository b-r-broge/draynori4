const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page19Schema = new Schema({

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

const Page19 = mongoose.model('Page19', page19Schema);

module.exports = Page19;
