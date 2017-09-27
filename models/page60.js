const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page60Schema = new Schema({

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

const Page60 = mongoose.model('Page60', page60Schema);

module.exports = Page60;
