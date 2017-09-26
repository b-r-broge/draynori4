const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page31Schema = new Schema({

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

const Page31 = mongoose.model('Page31', page31Schema);

module.exports = Page31;
