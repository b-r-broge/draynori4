const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page20Schema = new Schema({

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

const Page20 = mongoose.model('Page20', page20Schema);

module.exports = Page20;
