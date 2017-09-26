const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page82Schema = new Schema({

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

const Page82 = mongoose.model('Page82', page82Schema);

module.exports = Page82;
