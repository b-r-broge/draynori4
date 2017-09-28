const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page113Schema = new Schema({

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

const Page113 = mongoose.model('Page113', page113Schema);

module.exports = Page113;
