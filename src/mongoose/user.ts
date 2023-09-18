import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

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
      if (password.length === 0) return false
      if (this.password !== 'string') return false
      const result = await bcrypt.compare(password, this.password)
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
  }
})

UserSchemaMongoose.pre('save', async function (next) {
  if (this.password !== 'string') return next()
  if (!this.isModified('password')) return next()

  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } catch (err) {
    console.log(err)
  }
})

export const UserModelMongoose = model('User', UserSchemaMongoose)
