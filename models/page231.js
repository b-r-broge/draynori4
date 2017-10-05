const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page231Schema = new Schema({

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

const Page231 = mongoose.model('Page231', page231Schema);

module.exports = Page231;
