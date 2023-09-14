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

const UserModelMongoose = model('User', UserSchemaMongoose)

const newUser = new UserModelMongoose({
  userName: 'kevin',
  email: 'kevinrugeles',
  password: '12345'
})

newUser.save()
  .then((result) => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
