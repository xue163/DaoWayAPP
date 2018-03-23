const mongoose = require('mongoose')
const itemList = new mongoose.Schema({
  title:{type:String},
  name:{type:String},
  desc:{type:String},
  price:{type:Number},
  oldprice:{type:Number},
  orderCount:{type:Number},
  soldCount:{type:Number},
  commentCount:{type:Number},
  accept:{type:String},
  praise:{type:String},
  imgUrl:{type:String},
  company:{type:String},
  profile:{type:String},
  comments:{type:Array}
})


var m = mongoose.model('item',itemList)

module.exports = m;