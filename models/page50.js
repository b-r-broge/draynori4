const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page50Schema = new Schema({

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

const Page50 = mongoose.model('Page50', page50Schema);

module.exports = Page50;
