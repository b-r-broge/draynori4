const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold167Schema = new Schema({

gold167: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold167 = mongoose.model('gold167', gold167Schema);

module.exports = Gold167;
