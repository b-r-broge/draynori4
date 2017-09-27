const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page32Schema = new Schema({

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

const Page32 = mongoose.model('Page32', page32Schema);

module.exports = Page32;
