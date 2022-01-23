const express = require('express');
const bodyParser = require('body-parser');

// import routes

const app = express();

// use routes

app.use(bodyParser.json());

app.get('/', (req, res) => { // test
  res.send();
});

module.exports = app;