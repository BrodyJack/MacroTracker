const express = require('express');
const { name, version } = require('../package.json');
const api = express.Router();

module.exports = () => {
  // base route - return version
  api.get('/api', (req, res) => {
    res.status(200).send(`${name} - version ${version}`);
  });
  return api;
};
