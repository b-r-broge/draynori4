const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page74Schema = new Schema({

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

const Page74 = mongoose.model('Page74', page74Schema);

module.exports = Page74;
