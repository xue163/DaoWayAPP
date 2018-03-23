var express = require('express');
var router = express.Router();

const shopModel = require("../models/Shop/Shop");
const ServiceModel = require("../models/Service/Service");
const ItemModel = require('../models/Item/Item')
const CommentModel = require('../models/Rating/Rating')

router.get('/getShopList',function (req, res) {
  shopModel.find({},function (err, list) {
    if(!err){
      res.send({list:list})
    }
  })
});

router.get('/getServiceList', function (req, res) {
  ServiceModel.find({},function (err, list) {
    if(!err){
      res.send({list:list})
    }
  })
})

router.get('/getServiceItem', function (req, res) {
  const id = req.query.id
  ItemModel.findOne({id:id}, function (err, item) {
    if(!err){
      res.send({item:item})
    }
  })
})


router.get('/getComments1', function (req, res) {
  CommentModel.find({},function (err, comments) {
    if(!err){
      res.send({comments:comments})
    }
  })
})


router.get('/getComments', function (req, res) {
  //分页公式：find().limit(每页显示条数).skip((页数-1)*每页显示条数)
  const page = req.query.page||1
  //exec - execute执行函数
  CommentModel.find({}).limit(10).skip((page-1)*10).exec(function (err, comments) {
    if(!err){
      res.send({comments:comments})
    }
  })
})

module.exports = router;
