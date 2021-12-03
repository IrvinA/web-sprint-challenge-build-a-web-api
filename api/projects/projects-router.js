const express = require('express');

const {
  validatePost,
  validateProjectID,
  validateUpdatedPost,
} = require('./projects-middleware');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get('/:id', validateProjectID, (req, res, next) => {
  res.status(200).json(req.project);
});

module.exports = router;
