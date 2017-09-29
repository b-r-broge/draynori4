const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page169Schema = new Schema({

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

const Page169 = mongoose.model('Page169', page169Schema);

module.exports = Page169;
