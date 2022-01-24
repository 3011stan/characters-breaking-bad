const express = require('express');
const bodyParser = require('body-parser');

// import routes
const charactersRoutes = require('../routes/charactersRoutes');

const app = express();

app.use(bodyParser.json());

// use routes
app.use('/characters', charactersRoutes);

app.get('/', (req, res) => { // test
  res.send();
});

module.exports = app;