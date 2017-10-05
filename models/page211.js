const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page211Schema = new Schema({

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

const Page211 = mongoose.model('Page211', page211Schema);

module.exports = Page211;
