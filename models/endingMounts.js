const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const endingMountSchema = new Schema({

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

const EndingMount = mongoose.model('endingMount', endingMountSchema);

module.exports = EndingMount;
