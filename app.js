var express = require('express')
var app = express()

let message = 'Hello world';

// Budu muset menit kod pokazde kdyz budu chtit otestovat cele kolecko, tak schvalne kolikrat to bude
// 
// [01] 16/12/2016 01:12 Mam lambdu, ktera by mela byt schopna stahnout ZIP s kodem z Githubu a placnout ho na S3

app.get('/', function (req, res) {
  res.send(message)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
