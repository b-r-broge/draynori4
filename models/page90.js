const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page90Schema = new Schema({

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

const Page90 = mongoose.model('Page90', page90Schema);

module.exports = Page90;
