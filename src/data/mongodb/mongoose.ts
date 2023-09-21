import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://kevinsr09:1006124,239a@cluster0.xqwcszw.mongodb.net/RumiApp-test?retryWrites=true&w=majority')
  .then(() => { console.log('database conected') })
  .catch(error => console.log(error))

export class mongoDatabase {
  static async connect (MONGO_URI: string) {
    try {
      await mongoose.connect(MONGO_URI)
      console.log('Mongo database conected')
      return true
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
