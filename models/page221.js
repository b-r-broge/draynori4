const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page221Schema = new Schema({

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

const Page221 = mongoose.model('Page221', page221Schema);

module.exports = Page221;
