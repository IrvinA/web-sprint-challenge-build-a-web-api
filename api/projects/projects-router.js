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

router.post('/', validatePost, (req, res, next) => {
  Projects.insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

router.put('/:id', validateProjectID, validateUpdatedPost, (req, res, next) => {
  Projects.update(req.params.id, req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.delete('/:id', validateProjectID, (req, res, next) => {
  Projects.remove(req.params.id)
    .then(res.status(200).json(req.project))
    .catch(next);
});

router.get('/:id/actions', validateProjectID, (req, res, next) => {
  Projects.getProjectActions(req.params.id)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch(next);
});

module.exports = router;
