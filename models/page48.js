const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page48Schema = new Schema({

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

const Page48 = mongoose.model('Page48', page48Schema);

module.exports = Page48;
