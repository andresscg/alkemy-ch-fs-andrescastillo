const Transaction = require('../models/Transaction')

const transactionControllers = {
  getTransactions: async(req, res) => {
    try {
      const transactions = await Transaction.find({})
      if (transactions.length > 0) {
        res.status(200).json({success: true, response: transactions})
      }else{
        res.status(404).json({success: false, response: 'No transactions found'})
      }
    } catch (error) {
      res.status(500).json({success: false, response: error.message})
    }
  },
  getTransactionsByUser: async(req, res) => {
    const userId = req.params.id

    try {
      const userTransactions = await Transaction.find({user: userId})
      if(userTransactions.length > 0) {
        res.status(200).json({success: true, response: userTransactions})
      }else{
        res.status(404).json({success: false, response: 'No transactions found for this user'})
      }
    } catch (error) {
      res.status(500).json({success: false, response: error.message})
    }
  },
  addTransaction: async(req, res) => {
    const { concept, amount, type, date, user } = req.body
    let newTransaction
    try {
      newTransaction = await new Transaction({concept, amount, type, date, user}).save()
    } catch (error) {
      console.error(error)
      res.status(500).json({success: false, response: error.message})
    }
    if(newTransaction)
      res.status(201).json({success: true, response: newTransaction})
  }
}

module.exports = transactionControllers