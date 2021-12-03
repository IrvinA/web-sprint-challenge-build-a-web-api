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

module.exports = router;
