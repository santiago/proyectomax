var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('client'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var recogidas = {};

app.get('/recogidas', function(req, res) {
  var solicitudes = Object.keys(recogidas).map(function(i) {
    return recogidas[i];
  });
  res.send(solicitudes);
});

app.get('/recogidas/:id', function(req, res) {
  var id = req.params.id;
  res.send(recogidas[id]);
});


app.post('/recogidas', function(req, res) {
  var id = req.body.id;
  recogidas[id] = req.body;
  res.send({ ok: true });
});

app.post('/recogidas/:id/delete', function(req, res) {
  var id = req.params.id;
  recogidas[id] = null;
  res.send({ ok: true });
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
