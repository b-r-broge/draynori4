const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page47Schema = new Schema({

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

const Page47 = mongoose.model('Page47', page47Schema);

module.exports = Page47;
