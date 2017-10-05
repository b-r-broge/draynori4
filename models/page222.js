const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page222Schema = new Schema({

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

const Page222 = mongoose.model('Page222', page222Schema);

module.exports = Page222;
