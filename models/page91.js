const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page91Schema = new Schema({

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

const Page91 = mongoose.model('Page91', page91Schema);

module.exports = Page91;
