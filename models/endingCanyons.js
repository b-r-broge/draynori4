const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const endingCanyonSchema = new Schema({

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

const EndingCanyon = mongoose.model('endingCanyon', endingCanyonSchema);

module.exports = EndingCanyon;
