const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page203Schema = new Schema({

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

const Page203 = mongoose.model('Page203', page203Schema);

module.exports = Page203;
