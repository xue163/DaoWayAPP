const mongoose = require('mongoose')
const serviceSchema = new mongoose.Schema({
  title:{type:String,unique:true},
  orderCount:{type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String,unique:true},
})

module.exports = mongoose.model('service',serviceSchema)

