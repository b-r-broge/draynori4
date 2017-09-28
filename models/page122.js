const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page122Schema = new Schema({

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

const Page122 = mongoose.model('Page122', page122Schema);

module.exports = Page122;
