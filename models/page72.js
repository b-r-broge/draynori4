const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page72Schema = new Schema({

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

const Page72 = mongoose.model('Page72', page72Schema);

module.exports = Page72;
