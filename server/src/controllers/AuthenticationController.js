const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 7 * 24 * 60 * 60
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      console.error(error)
      res.status(400).send({
        error: error
      })
    }
    
    // res.send({
    //   message: `Hello ${req.body.email}! Your user was registered. Have fun!`
    // })

  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        console.log('No user found', email)
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        console.log('Invalid password')
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      console.error(error)
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}