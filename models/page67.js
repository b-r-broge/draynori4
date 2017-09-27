const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page67Schema = new Schema({

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

const Page67 = mongoose.model('Page67', page67Schema);

module.exports = Page67;
