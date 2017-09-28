const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const endingTownSchema = new Schema({

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

const EndingTown = mongoose.model('endingTown', endingTownSchema);

module.exports = EndingTown;
