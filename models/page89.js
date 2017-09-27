const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page89Schema = new Schema({

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

const Page89 = mongoose.model('Page89', page89Schema);

module.exports = Page89;
