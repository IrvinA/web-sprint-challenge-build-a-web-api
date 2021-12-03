const Actions = require('./actions-model');

function validateActionID(req, res, next) {
  Actions.get(req.params.id)
    .then((action) => {
      if (action) {
        req.action = action;
        next();
      } else {
        next({
          status: 404,
          message: 'Action not found',
        });
      }
    })
    .catch(next);
}

module.exports = {
  validateActionID,
};
