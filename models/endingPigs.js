const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const endingPigSchema = new Schema({

beginning: {
  type: String,
},
text: {
  type: String,
},
end: {
  type: String,
},


})

const EndingPig = mongoose.model('endingPig', endingPigSchema);

module.exports = EndingPig;
