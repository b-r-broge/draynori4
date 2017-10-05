const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page229Schema = new Schema({

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

const Page229 = mongoose.model('Page229', page229Schema);

module.exports = Page229;
