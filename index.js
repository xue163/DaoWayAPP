require("./tools/db")

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(function(req,res,next){
  res.set('Access-Control-Allow-Origin',"*");
  next();
});

app.use(require('./routes'))

app.listen(3000);
