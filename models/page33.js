const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page33Schema = new Schema({

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

const Page33 = mongoose.model('Page33', page33Schema);

module.exports = Page33;
