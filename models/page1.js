const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page1Schema = new Schema({

text: {
  type: String,
  required: true,
},
option1: {
  type: String,
  required: true,
},
option2: {
  type: String,
  required: true,
},
option3: {
  type: String,
  required: true,
},
option4: {
  type: String,
  required: true,
},
option5: {
  type: String,
  required: true,
},

})

const Page1 = mongoose.model('Page1', page1Schema);

module.exports = Page1;
