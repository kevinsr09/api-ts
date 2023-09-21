import { getModelForClass, modelOptions, pre, prop } from '@typegoose/typegoose'
import bcrypt from 'bcryptjs'
// import { mongoDatabase } from '../../../connection/mongoose'
// import { envs } from '../../../config/envs'
// import mongoose from 'mongoose'

enum ROLE {
  USER = 'USER',
  TECNICO = 'TECNICO'
}

@modelOptions({
  options: {
    customName: 'User'
  },
  schemaOptions: {
    toJSON: {
      virtuals: true,
      transform: function (_, ret) {
        delete ret._id
        delete ret.__v
      }
    }
  }
})
@pre<UserSchemaMongoose>('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!this.isModified('password')) return next()
  if (this.password == null) return next()

  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } catch (err) {
    console.log(err)
  }
}
)

export class UserSchemaMongoose {
  @prop({
    type: String,
    required: true,
    unique: true
  })
  public userName!: string

  @prop({
    type: String,
    required: true,
    unique: true
  })
  public email!: string

  @prop({
    required: true,
    type: String
  })
  public password!: string

  @prop({
    type: Date,
    default: Date.now()
  })
  public createAt!: Date

  @prop({
    type: Array<String>,
    default: [ROLE.USER]
  })
  public role!: string[]

  @prop({
    type: String
  })
  public avatar?: string

  public async comparePassword (password: string): Promise<Boolean> {
    if (password.length === 0) return false
    if (this.password !== 'string') return false
    const result = await bcrypt.compare(password, this.password)
    return result
  }
}

export const UserModelMongoose = getModelForClass(UserSchemaMongoose)

// void (
//   async () => {
//     await mongoDatabase.connect(envs.MONGO_URI)
//     const user = await UserModelMongoose.create({
//       userName: 'kevin5',
//       password: '123456',
//       email: 'kevinrugeles5',
//       avatar: 'kevin.img',
//       role: [ROLE.TECNICO]
//     })
//     console.log(user?.toJSON())
//     await mongoose.connection.close()
//   }
// )()

// void (
//   async () => {
//     await mongoDatabase.connect(envs.MONGO_URI)

//     const user = await UserModelMongoose.findById('65046c93728ca0c4454c1bf1')
//     console.log(user?.toJSON())
//     await mongoose.connection.close()
//   }
// )()
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

// const UserSchemaMongoose = new Schema({
//   userName: {
//     type: String,
//     require: true,
//     unique: true
//   },
//   email: {
//     type: String,
//     require: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     require: true
//   },
//   createAt: {
//     type: Date,
//     default: Date.now()
//   }

// }, {
//   methods: {
//     comparePassword: async function (password: string): Promise<Boolean> {
//       if (password.length === 0) return false
//       if (this.password !== 'string') return false
//       const result = await bcrypt.compare(password, this.password)
//       return result
//     }
//   },
//   toJSON: {
//     virtuals: true,
//     transform: function (_, ret) {
//       delete ret._id
//       delete ret.__v
//     }
//   },
//   virtuals: {
//     id: {
//       get () {
//         return this._id
//       }
//     }
//   }
// })

// UserSchemaMongoose.pre('save', async function (next) {
//   if (this.password !== 'string') return next()
//   if (!this.isModified('password')) return next()

//   try {
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//   } catch (err) {
//     console.log(err)
//   }
// })

// export const UserModelMongoose = model('User', UserSchemaMongoose)
