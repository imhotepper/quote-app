

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join( __dirname , "/build/unbundled")));
app.listen(process.env.PORT || 5000);