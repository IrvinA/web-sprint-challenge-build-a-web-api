const express = require('express');

const {
  validateActionID,
  validateActionPost,
} = require('./actions-middleware');

const Actions = require('./actions-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Actions.get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get('/:id', validateActionID, (req, res, next) => {
  res.status(200).json(req.action);
});

router.post('/', validateActionPost, (req, res, next) => {
  Actions.insert(req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch(next);
});

router.put('/:id', validateActionID, validateActionPost, (req, res, next) => {
  Actions.update(req.params.id, req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch(next);
});

router.delete('/:id', validateActionID, (req, res, next) => {
  Actions.remove(req.params.id)
    .then(res.status(200).json(req.action))
    .catch(next);
});

module.exports = router;
