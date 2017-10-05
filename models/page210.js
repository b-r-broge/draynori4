const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page210Schema = new Schema({

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

const Page210 = mongoose.model('Page210', page210Schema);

module.exports = Page210;
