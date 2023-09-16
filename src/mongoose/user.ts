import { Schema, model } from 'mongoose'
const bcrypt = require('bcryptjs')

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
    comparePassword: async function (password: string): Promise<Boolean> {
      const result: Boolean = await bcrypt.compare(password, this.password)
      return result
    }
  },
  toJSON: {
    transform: function (_, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
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

export const UserModelMongoose = model('User', UserSchemaMongoose)
