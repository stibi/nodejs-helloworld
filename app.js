var express = require('express')
var app = express()

let message = 'Hello world';

app.get('/', function (req, res) {
  res.send(message)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
