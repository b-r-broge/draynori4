const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page22Schema = new Schema({

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

const Page22 = mongoose.model('Page22', page22Schema);

module.exports = Page22;
