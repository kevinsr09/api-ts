import mongoose from 'mongoose'
// const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kevinsr09:1006124,239a@cluster0.xqwcszw.mongodb.net/RumiApp-test?retryWrites=true&w=majority')
  .then(() => { console.log('database conected') })
  .catch(error => console.log(error))
