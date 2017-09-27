const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page93Schema = new Schema({

  text: {
    type: String,
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },

})

const Page93 = mongoose.model('Page93', page93Schema);

module.exports = Page93;
