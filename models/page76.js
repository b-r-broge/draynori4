const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page76Schema = new Schema({

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

const Page76 = mongoose.model('Page76', page76Schema);

module.exports = Page76;
