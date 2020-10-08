const {User} = require('../models')

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll()
      res.send(JSON.stringify(users, null, 2))
    } catch (error) {
      console.error(error)
      res.status(400).send({
        error: error
      })
    }
  }
}