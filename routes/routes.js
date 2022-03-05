const Router = require('express').Router()
const passport = require('passport')
const validator = require('../controllers/validator')

const {getTransactions, getTransactionsByUser, addTransaction} = require('../controllers/transactionControllers')
const {addNewUser, signInUser, verifyToken} = require('../controllers/userControllers')

Router.route('/transactions').get(getTransactions).post(addTransaction)
Router.route('/transactions/users/:id').get(getTransactionsByUser)

Router.route('/users/signup').post(validator, addNewUser)
Router.route('/users/signin').post(signInUser)
Router.route('/verifyToken').get(passport.authenticate('jwt', {session: false}), verifyToken)

module.exports = Router