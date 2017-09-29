const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page155Schema = new Schema({

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

const Page155 = mongoose.model('Page155', page155Schema);

module.exports = Page155;
