var express = require('express')
var app = express()

let message = 'Hello world';

// Budu muset menit kod pokazde kdyz budu chtit otestovat cele kolecko, tak schvalne kolikrat to bude
// 
// [01] 16/12/2016 01:12 Mam lambdu, ktera by mela byt schopna stahnout ZIP s kodem z Githubu a placnout ho na S3
// [02] 16/12/2016 01:18 tak to by bylo, ted teda samotny build
// [03] 16/12/2016 01:18 mam gulpfile a takovy pseudo build
// [04] 17/12/2016 10:25 lambda by ted mela prebalit githubi zip, zrusit root adresar
// [05] 17/12/2016 11:20 trigger a build
// [06] 17/12/2016 11:39 další trigger, lambda trochu zlobí, zdá se
// [07] 17/12/2016 11:40 super, teď je to lepší. Zkusíme, jestli problém byl opravdu úklid na lambdě
// [08] 17/12/2016 11:41 jop, přesně tak. Zahřáté lambdě tam zůstane bordel z přebalování zipu, fixed!
// [09] 17/12/2016 14:17 build buildí, založil jsem pipeline, která spustila build
// Mám pocit, že nový ZIP v bucketu tu pipeline automaticky nespustí, ale uvidíme.
// Pokud ne, tak to můžu udělat explicitně z lambdy, API tam bude.
// [10] 17/12/2016 14:23 Je to dobrý, nový ZIP na S3 spustí pipeline, super!
// [11] 19/12/2016 23:19 Testing build trigger, implementing multi branch support
// [12] 19/12/2016 23:47 dalsi trigger
// [13] 19/12/2016 23:47 dalsi trigger
// [14] 19/12/2016 23:59 dalsi trigger, artefakty uz se mi na S3 ukladaji do slozek podle branchi

app.get('/', function (req, res) {
  res.send(message)
})

app.get('/version', function (req, res) {
  res.send('1')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
