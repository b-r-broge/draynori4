const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page44Schema = new Schema({

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

const Page44 = mongoose.model('Page44', page44Schema);

module.exports = Page44;
