const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page84Schema = new Schema({

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

const Page84 = mongoose.model('Page84', page84Schema);

module.exports = Page84;
