const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
app.use('/add', (req, res, next) => {
   res.send('<div>hello</div>');
});
app.use('/',(req, res, next) => {
  res.send('<div>hi</div>');
});
//same 
//const server = http.createServer(app);
//server.listen(3010);
app.listen(3010);


