// import { Schema, model } from 'mongoose'
const { Schema, model } = require('mongoose')
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
UserSchemaMongoose.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const UserModelMongoose = model('User', UserSchemaMongoose)

UserModelMongoose.findOne({ userName: 'kevin3' }).then(result => console.log(result))

// const newUser = new UserModelMongoose({
//   userName: 'kevin3',
//   email: 'kevinrugeles3',
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
