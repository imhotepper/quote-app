

var express = require('express');
var path = require('path');
var app = express();

console.log("serve it from: ",path.join( __dirname , "/"));

app.use('/bower_components', express.static('./bower_components'))
app.use(express.static(path.join( __dirname , "/build/unbundled")));
app.listen(process.env.PORT || 5000);