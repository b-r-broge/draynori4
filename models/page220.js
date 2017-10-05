const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page220Schema = new Schema({

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

const Page220 = mongoose.model('Page220', page220Schema);

module.exports = Page220;
