const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const endingSchema = new Schema({

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

const Ending = mongoose.model('ending', endingSchema);

module.exports = Ending;
