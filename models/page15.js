const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page15Schema = new Schema({

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

const Page15 = mongoose.model('Page15', page15Schema);

module.exports = Page15;
