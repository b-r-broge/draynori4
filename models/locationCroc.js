const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const crocSchema = new Schema({

croc: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Croc = mongoose.model('croc', crocSchema);

module.exports = Croc;
