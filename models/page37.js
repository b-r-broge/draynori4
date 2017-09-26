const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page37Schema = new Schema({

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

const Page37 = mongoose.model('Page37', page37Schema);

module.exports = Page37;
