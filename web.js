var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(process.cwd(), 'source')));
console.log(process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);

// const http=require('http');
// const expess=require('express');
// const app=expess();

// app.use(expess.static('.'));

// http.createServer(app).listen(3000, function () {
//     console.log('listening 3000 port');
//   });