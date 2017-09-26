const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page11Schema = new Schema({

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

const Page11 = mongoose.model('Page11', page11Schema);

module.exports = Page11;
