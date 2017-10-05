const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page225Schema = new Schema({

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

const Page225 = mongoose.model('Page225', page225Schema);

module.exports = Page225;
