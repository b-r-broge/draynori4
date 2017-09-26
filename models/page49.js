const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page49Schema = new Schema({

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

const Page49 = mongoose.model('Page49', page49Schema);

module.exports = Page49;
