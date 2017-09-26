const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page7Schema = new Schema({

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

const Page7 = mongoose.model('Page7', page7Schema);

module.exports = Page7;
