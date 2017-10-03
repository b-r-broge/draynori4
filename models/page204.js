const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page204Schema = new Schema({

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

const Page204 = mongoose.model('Page204', page204Schema);

module.exports = Page204;
