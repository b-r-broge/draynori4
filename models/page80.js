const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page80Schema = new Schema({

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

const Page80 = mongoose.model('Page80', page80Schema);

module.exports = Page80;
