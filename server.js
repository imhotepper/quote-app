

var express = require('express');
var path = require('path');
var app = express();
console.log(path.join( __dirname , "/"));
app.use(express.static(path.join( __dirname , "/")));
app.listen(process.env.PORT || 5000);