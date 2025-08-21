// server.js - Microservicio de marca de tiempo para FreeCodeCamp
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

//Middleware
app.use(cors({optionsSuccessStatus: 200}));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Servir pagina principal
app.get('/', function (req, res){
  res.sendFile(__dirname + '/views/index.html');
});

// Endpoint principal API
app.get('/api/:date?', function (req, res){
  const dateParam = req.params.date;

  let date;

  if (!dateParam){
    date = new Date();
  } else {
    // Verificar si parametro es numero
    if (!isNaN(dateParam)) {
      //si no lo es convertirlo
      date = new Date(parseInt(dateParam));

    } else {
      // intentar parsear como cadena de fecha
      date = new Date(dateParam);
    }
  }

  if (date.toString() === "Invalid Date") {
    res.json({error: "Invalid Date"});
  } else {
    // Devolver objeto con UNIX timestamp y UTC toString()
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});

// Iniciar Servidor
const listener = app.listen(process.env.PORT || 3000, function() {
  console.log("\n\n[+] Tu aplicación está escuchando en el puerto " + listener.address().port);
});

module.exports = app;
