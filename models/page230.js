const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page230Schema = new Schema({

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

const Page230 = mongoose.model('Page230', page230Schema);

module.exports = Page230;
