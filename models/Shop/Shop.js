const mongoose = require('mongoose')
const shopShcema = new mongoose.Schema({
  serviceIndex:{type:String,unique:true},
  serviceType:{type:Array,unique:true},
  shopList:{type:Array,unique:true}
})

module.exports = mongoose.model('shop',shopShcema)


