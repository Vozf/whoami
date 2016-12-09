
 var str=require("strftime");
var express = require('express');
var app = express();

  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

app.get('/:req', function (req, res) {
  console.log(req.params.req);
  var dat=new Date(+req.params.req);
  if(dat.toString()==="Invalid Date")
  dat=new Date(req.params.req);
  console.log(dat);
  var obj={
    "unix":null,
    "natural":null
  };




  if(dat.toString()!=="Invalid Date"){
    obj.unix=dat.getTime();
    obj.natural=(monthNames[dat.getMonth()]+str(" %d,%Y",dat));
  }
  res.end(JSON.stringify(obj));
})
app.get('/',function(req,res){
  res.end("Enter value");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})