const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page116Schema = new Schema({

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
  },
  option4: {
    type: String,
  },
  option5: {
    type: String,
  },

})

const Page116 = mongoose.model('Page116', page116Schema);

module.exports = Page116;
