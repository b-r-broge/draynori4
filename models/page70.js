const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page70Schema = new Schema({

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

const Page70 = mongoose.model('Page70', page70Schema);

module.exports = Page70;
