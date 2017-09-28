const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page112Schema = new Schema({

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

const Page112 = mongoose.model('Page112', page112Schema);

module.exports = Page112;
