const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page94Schema = new Schema({

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

const Page94 = mongoose.model('Page94', page94Schema);

module.exports = Page94;
