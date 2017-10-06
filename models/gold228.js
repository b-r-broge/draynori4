const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold228Schema = new Schema({

gold228: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold228 = mongoose.model('gold228', gold228Schema);

module.exports = Gold228;
