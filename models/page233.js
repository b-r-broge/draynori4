const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page233Schema = new Schema({

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

const Page233 = mongoose.model('Page233', page233Schema);

module.exports = Page233;
