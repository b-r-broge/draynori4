const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page226Schema = new Schema({

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

const Page226 = mongoose.model('Page226', page226Schema);

module.exports = Page226;
