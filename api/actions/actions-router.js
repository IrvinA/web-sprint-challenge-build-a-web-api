const express = require('express');

const { 
  validateActionID, 
  validateActionPost 
} = require('./actions-middleware');

const Actions = require('./actions-model');

const router = express.Router();

module.exports = router;
