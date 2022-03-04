const Router = require('express').Router()

const {getTransactions, getTransactionsByUser, addTransaction} = require('../controllers/transactionControllers')

Router.route('/transactions').get(getTransactions).post(addTransaction)

Router.route('/transactions/users/:id').get(getTransactionsByUser)

module.exports = Router