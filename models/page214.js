const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page214Schema = new Schema({

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

const Page214 = mongoose.model('Page214', page214Schema);

module.exports = Page214;
