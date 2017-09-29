const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page162Schema = new Schema({

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

const Page162 = mongoose.model('Page162', page162Schema);

module.exports = Page162;
