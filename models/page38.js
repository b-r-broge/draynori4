const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page38Schema = new Schema({

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

const Page38 = mongoose.model('Page38', page38Schema);

module.exports = Page38;
