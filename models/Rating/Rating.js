/**
 * Created by HP on 2018/3/21.
 */
const mongoose = require('mongoose')
const ratingSchema = new mongoose.Schema({
  iconUrl:String,
  area:String,
  city:String,
  comment:String,
  createtime:Number,
  nick:String,
  star:Number
})


module.exports = mongoose.model('rating',ratingSchema)

