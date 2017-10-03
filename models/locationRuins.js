const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const ruinSchema = new Schema({

ruin: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Ruin = mongoose.model('ruin', ruinSchema);

module.exports = Ruin;
