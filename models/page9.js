const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page9Schema = new Schema({

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

const Page9 = mongoose.model('Page9', page9Schema);

module.exports = Page9;
