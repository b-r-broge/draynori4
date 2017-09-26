const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page8Schema = new Schema({

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

const Page8 = mongoose.model('Page8', page8Schema);

module.exports = Page8;
