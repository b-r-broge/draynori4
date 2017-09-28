const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page100Schema = new Schema({

  text: {
    type: String,
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },
  option3: {
    type: String,
  }

})

const Page100 = mongoose.model('Page100', page100Schema);

module.exports = Page100;
