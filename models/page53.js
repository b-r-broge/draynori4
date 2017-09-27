const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page53Schema = new Schema({

  text: {
    type: String,
    // required: true,
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

const Page53 = mongoose.model('Page53', page53Schema);

module.exports = Page53;
