const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page215Schema = new Schema({

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

const Page215 = mongoose.model('Page215', page215Schema);

module.exports = Page215;
