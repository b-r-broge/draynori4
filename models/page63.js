const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page63Schema = new Schema({

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

const Page63 = mongoose.model('Page63', page63Schema);

module.exports = Page63;
