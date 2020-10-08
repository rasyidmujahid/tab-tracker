const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const UserController = require('./controllers/UserController')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
    // const users = UserController.getAllUsers
    // res.send(
    //   users
    // )
  })

  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post('/login',
    AuthenticationController.login
  )

  app.get('/users',
    UserController.getAllUsers
  )
}
