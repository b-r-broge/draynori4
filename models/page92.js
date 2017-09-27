const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page92Schema = new Schema({

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

const Page92 = mongoose.model('Page92', page92Schema);

module.exports = Page92;
