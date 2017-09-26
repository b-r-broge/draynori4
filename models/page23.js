const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page23Schema = new Schema({

  text: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },

})

const Page23 = mongoose.model('Page23', page23Schema);

module.exports = Page23;
