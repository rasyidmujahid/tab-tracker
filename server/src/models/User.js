const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

function hashPassword(user) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return;
  }

  // return bcrypt
  //   .genSaltAsync(SALT_FACTOR)
  //   .then(salt => {
  //     console.log('salt', salt)
  //     bcrypt.hashAsync(user.password, salt, null)
  //   })
  //   .then(hash => {
  //     console.log('hash', hash)
  //     user.setDataValue('password', hash)
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })

  const salt = bcrypt.genSaltSync(SALT_FACTOR)
  console.log('salt', salt)

  const hash = bcrypt.hashSync(user.password, salt)
  console.log('hash', hash)

  return user.setDataValue('password', hash)
}

// function beforeCreate() {
//   console.log('beforeCreate')
// }

// function beforeUpdate() {
//   console.log('beforeUpdate')
// }

function beforeSave() {
  console.log('beforeSave')
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      // beforeCreate: [beforeCreate, hashPassword, beforeCreate],
      // beforeUpdate: [beforeUpdate, hashPassword],
      beforeSave: [beforeSave, hashPassword]
    }
  })

  User.prototype.comparePassword = function (password) {
    console.log('Comparing', password, this.password)
    return bcrypt.compareAsync(password, this.password)
  }
  
  return User
}