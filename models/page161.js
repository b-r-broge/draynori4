const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page161Schema = new Schema({

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

const Page161 = mongoose.model('Page161', page161Schema);

module.exports = Page161;
