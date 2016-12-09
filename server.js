

var express = require('express');
var app = express();



app.get('/', function (req, res) {
  var obj={
    "ipaddress":null,
    "language":null,
    "software":null,
    "region":null
  }
  var ip=req.headers['x-forwarded-for'];
  var lang=req.headers["accept-language"] 
  
console.log(req.headers);
obj.ipaddress=req.headers['x-forwarded-for'];
obj.language=req.headers["accept-language"].toString().split(",")[0];
var str=req.headers["user-agent"].toString();
obj.software=str.slice(str.indexOf("(")+1,str.indexOf(")")) ;
obj.region=req.headers["x-region"]; 



  res.end(JSON.stringify(obj));
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})