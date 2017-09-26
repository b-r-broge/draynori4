const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page71Schema = new Schema({

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

const Page71 = mongoose.model('Page71', page71Schema);

module.exports = Page71;
