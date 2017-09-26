const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page83Schema = new Schema({

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

const Page83 = mongoose.model('Page83', page83Schema);

module.exports = Page83;
