const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page12Schema = new Schema({

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

const Page12 = mongoose.model('Page12', page12Schema);

module.exports = Page12;
