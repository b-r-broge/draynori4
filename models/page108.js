const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page108Schema = new Schema({

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

const Page108 = mongoose.model('Page108', page108Schema);

module.exports = Page108;
