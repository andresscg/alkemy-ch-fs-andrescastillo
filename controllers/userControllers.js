const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
  addNewUser: (req, res) => {
    const {name, email, password, profilePicture, country} = req.body
    let hash = bcrypt.hashSync(password)
    const newUser = new User({name, email, profilePicture, country, password: hash})
    User.findOne({email: newUser.email})
      .then(user => {
        if(user){
          res.status(409).json({success: false, response: 'Email already in use'})
        }else{
          newUser.save()
            .then(newUser => {
              const token = jwt.sign({...newUser}, process.env.SECRET_KEY)
              res.status(201).json({success: true, response: {...newUser._doc, token}})
            })
            .catch(err => res.status(500).json({success: false, response: err}))
        }
      })
      .catch(err => res.status(500).json({success: false, response: err}))
  },
  signInUser: (req, res) => {
    const {email, password} = req.body
    User.findOne({email: email})
      .then(user => {
        let dcPass = user && bcrypt.compareSync(password, user.password)
        if(!user || !dcPass){
          res.status(403).json({success: false, response: 'Invalid email or password'})
        }else{
          const token = jwt.sign({...user}, process.env.SECRET_KEY)
          res.status(200).json({success: true, response: {...user._doc, token}})
        }
      })
      .catch(err => res.status(500).json({success: false, response: err.message}))
  },
  verifyToken: (req, res) => {
    res.json({name: req.user.name, profilePicture: req.user.profilePicture, _id: req.user._id, country: req.user.country})
  }
}

module.exports = userControllers