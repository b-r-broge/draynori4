const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page85Schema = new Schema({

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

const Page85 = mongoose.model('Page85', page85Schema);

module.exports = Page85;
