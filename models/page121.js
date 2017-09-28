const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page121Schema = new Schema({

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

const Page121 = mongoose.model('Page121', page121Schema);

module.exports = Page121;
