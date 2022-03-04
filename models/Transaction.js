const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  concept: {type: String, required: true},
  amount: {type: Number, required: true},
  type: {type: String, required: true},
  date: {type: String, required: true},
  user: {type: mongoose.Types.ObjectId, ref: 'user', required: true}
})

const Transaction = mongoose.model('transaction', transactionSchema)
module.exports = Transaction