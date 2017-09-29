const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page177Schema = new Schema({

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

const Page177 = mongoose.model('Page177', page177Schema);

module.exports = Page177;
