const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router;
const cors = require ('cors')

routes.post('/register', CandidateController.register);
routes.get('/', (req, res) => {
  res.send("API JobsNET - ACOS.");
});

module.exports = routes;
