const joi = require('joi')

const validator = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().trim().alphanum().min(2).required().messages({
      'string.empty': 'Name can not be empty',
      'any.required': 'All field are required',
      'string.alphanum': 'Name must only contain alphabetic characters',
      'string.min': 'Name must be at least 2 characters'
    }),
    email: joi.string().trim().email().required().messages({
      'string.empty': 'Email can not be empty',
      'any.required': 'All field are required',
      'string.email': 'Email be a valid email address'
    }), 
    password: joi.string().min(8).max(16).alphanum().required().messages({
      'string.empty': 'Password can not be empty',
      'any.required': 'All field are required',
      'string.min': 'Password must be at least 8 characters',
      'string.max': 'Password must be at most 16 characters',
      'string.alphanum': 'Password must have only alphanumeric characters'
    }),
    country: joi.string().trim().pattern(/^[a-zA-Z]+$/).required().messages({
      'string.empty': 'Country can not be empty',
      'any.required': 'All field are required',
      'string.pattern.base': 'Country must only have letters'
    })
  })

  const validation = schema.validate(req.body, {abortEarly: false})
  if(!validation.error){
    next()
  }else{
    res.status(400).json({success: false, errors: validation.error.details})
  }
}

module.exports = validator