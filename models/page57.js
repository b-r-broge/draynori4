const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page57Schema = new Schema({

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

const Page57 = mongoose.model('Page57', page57Schema);

module.exports = Page57;
