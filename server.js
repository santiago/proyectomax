var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('client'));

var recogidas = {
};

app.get('/recogidas', function(req, res) {
  console.log(req.session);
  res.send([
    { id: Date.now(),
      fuente: "Ruta N"
    },
    {
      id: Date.now(),
      fuente: "Ruta N",
      asignadaA: "Diego Armando"
    }
  ]);
});

app.put('/recogidas', function(req, res) {

});

app.post('/recogidas', function(req, res) {
  res.send({ ok: true })
});

app.delete('/recogidas', function(req, res) {

});


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
