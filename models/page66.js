const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page66Schema = new Schema({

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

const Page66 = mongoose.model('Page66', page66Schema);

module.exports = Page66;
