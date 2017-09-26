const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page40Schema = new Schema({

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

const Page40 = mongoose.model('Page40', page40Schema);

module.exports = Page40;
