const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page28Schema = new Schema({

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

const Page28 = mongoose.model('Page28', page28Schema);

module.exports = Page28;
