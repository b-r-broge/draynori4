const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page26Schema = new Schema({

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

const Page26 = mongoose.model('Page26', page26Schema);

module.exports = Page26;
