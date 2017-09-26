const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page51Schema = new Schema({

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

const Page51 = mongoose.model('Page51', page51Schema);

module.exports = Page51;
