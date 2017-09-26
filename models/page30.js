const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page30Schema = new Schema({

  text: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    // required: true,
  },
  option2: {
    type: String,
    // required: true,
  },
  option3: {
    type: String,
    // required: true,
  },

})

const Page30 = mongoose.model('Page30', page30Schema);

module.exports = Page30;
