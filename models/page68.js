const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page68Schema = new Schema({

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

const Page68 = mongoose.model('Page68', page68Schema);

module.exports = Page68;
