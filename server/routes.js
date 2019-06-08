const express = require('express');
const { name, version } = require('../package.json');
const api = express.Router();
const { insertFoodItems } = require('./controllers/foodItem.controller');

module.exports = () => {
  api.post('/api/foodItem', (req, res) => {
    insertFoodItems(req, res);
  });
  // base route - return version
  api.get('/api', (req, res) => {
    res.status(200).send(`${name} - version ${version}`);
  });
  return api;
};
