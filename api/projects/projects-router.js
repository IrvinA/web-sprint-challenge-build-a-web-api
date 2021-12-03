const express = require('express');

const {
  validatePost,
  validateProjectID,
  validateUpdatedPost,
} = require('./projects-middleware');

const Projects = require('./projects-model');

const router = express.Router();

module.exports = router;
