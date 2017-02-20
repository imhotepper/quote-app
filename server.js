

var express = require('express');
var path = require('path');
var app = express();

console.log("serve it from: ",path.join( __dirname , "/build/unbundled"));

app.use(express.static(path.join( __dirname , "/build/unbundled")));
app.listen(process.env.PORT || 5000);