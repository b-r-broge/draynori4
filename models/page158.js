const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page158Schema = new Schema({

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

const Page158 = mongoose.model('Page158', page158Schema);

module.exports = Page158;
