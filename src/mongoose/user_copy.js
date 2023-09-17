// import { Schema, model } from 'mongoose'
const { Schema, model, default: mongoose } = require('mongoose')
const bcrypt = require('bcryptjs')
require('../connection/mongoose_copy')
const UserSchemaMongoose = new Schema({
  userName: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
}, {
  methods: {
    comparePassword: async function (password) {
      const result = await bcrypt.compare(password, this.password)
      console.log(this.password)
      return result
    }
  },
  toJSON: {
    virtuals: true,
    transform: function (_, ret) {
      delete ret._id
      delete ret.__v
    }
  },
  virtuals: {
    id: {
      get () {
        return this._id
      }
    }
  },
  statics: {
    findByID (id) {
      return this.find({ _id: id })
    }
  }
})

UserSchemaMongoose.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } catch (err) {
    console.log(err)
  }
})

UserSchemaMongoose.query.findByID = function (userID) {
  return this.find({ _id: userID })
}

const UserModelMongoose = model('User', UserSchemaMongoose)

;(
  async () => {
    const user = await UserModelMongoose.findByID('65046c93728ca0c4454c1bf1')
    console.log(user)
    mongoose.connection.close()
  }
)()
// ;(
//   async () => {
//     const user = await UserModelMongoose.findOne({ _id: '65046c93728ca0c4454c1bf1' })
//     console.log(user.toJSON())
//     console.log(user.id)
//     mongoose.connection.close()
//   }
// )()

// const newUser = new UserModelMongoose({
//   userName: 'kevin4',
//   email: 'kevinrugeles4',
//   password: '12345'
// })

// newUser.save()
//   .then((result) => {
//     console.log(result)
//     mongoose.connection.close()
//   })
//   .catch(error => {
//     console.log(error)
//   })
