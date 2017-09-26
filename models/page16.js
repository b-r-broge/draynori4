const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page16Schema = new Schema({

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

const Page16 = mongoose.model('Page16', page16Schema);

module.exports = Page16;
