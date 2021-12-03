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

function validateActionPost(req, res, next) {
  const { project_id, description, notes } = req.body;
  if (!project_id) {
    next({
      status: 400,
      message: 'Project ID is missing',
    });
  } else if (!description) {
    next({
      status: 400,
      message: 'Description is missing',
    });
  } else if (description.trim().length > 128) {
    next({
      status: 400,
      message: 'Description is limited to 128 chars',
    });
  } else if (!notes) {
    next({
      status: 400,
      message: 'Use notes to explain how to complete the action',
    });
  } else {
    next();
  }
}

module.exports = {
  validateActionID,
  validateActionPost,
};
