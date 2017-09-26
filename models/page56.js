const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page56Schema = new Schema({

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

const Page56 = mongoose.model('Page56', page56Schema);

module.exports = Page56;
