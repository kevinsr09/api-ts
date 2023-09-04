// import mongoose from 'mongoose'
// import { Product } from '../types'
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kevinsr09:1006124,239a@cluster0.xqwcszw.mongodb.net/RumiApp-test?retryWrites=true&w=majority')
  .then(() => { console.log('database conected') })
  .catch(error => console.log(error))

const BaseProductSchema = new mongoose.Schema({
  name: String
})

const Model = mongoose.model('Base_product', BaseProductSchema)

const newProduct = new Model({ name: 'kevin' })

newProduct.save()
  .then(() => { console.log('agregado'); mongoose.connection.close() })
  .catch(error => console.log(error))

/*
{
  name: String,
  referencePart: String,
  urlStore: String,
  nameStore: String,
  idStore: String,
  genuine: Boolean,
  category: String,
  tag: String,
  description: String,
  price: Number,
  stock: Number,
  imgs: String
}
*/
