const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page157Schema = new Schema({

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

const Page157 = mongoose.model('Page157', page157Schema);

module.exports = Page157;
