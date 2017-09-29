const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page166Schema = new Schema({

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

const Page166 = mongoose.model('Page166', page166Schema);

module.exports = Page166;
