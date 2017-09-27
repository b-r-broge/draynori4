const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page95Schema = new Schema({

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

const Page95 = mongoose.model('Page95', page95Schema);

module.exports = Page95;
