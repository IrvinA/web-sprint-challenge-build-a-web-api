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

router.get('/:id', validateActionID, (req, res, next) => {
  res.status(200).json(req.action);
});

module.exports = router;
