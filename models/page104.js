const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page104Schema = new Schema({

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

const Page104 = mongoose.model('Page104', page104Schema);

module.exports = Page104;
