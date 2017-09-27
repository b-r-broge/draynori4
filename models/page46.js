const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page46Schema = new Schema({

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

const Page46 = mongoose.model('Page46', page46Schema);

module.exports = Page46;
