const Projects = require('./projects-model');

function validateProjectID(req, res, next) {
  Projects.get(req.params.id)
    .then((project) => {
      if (project) {
        req.project = project;
        next();
      } else {
        next({
          status: 404,
          message: 'Project not found',
        });
      }
    })
    .catch(next);
}

function validatePost(req, res, next) {
  const { name, description } = req.body;
  if (!name) {
    next({
      status: 400,
      message: 'Missing name',
    });
  } else if (!description) {
    next({
      status: 400,
      message: 'Missing description',
    });
  } else {
    next();
  }
}

function validateUpdatedPost(req, res, next) {
  const { name, description, completed } = req.body;
  if (!name) {
    next({
      status: 400,
      message: 'Missing name',
    });
  } else if (!description) {
    next({
      status: 400,
      message: 'Missing description',
    });
  } else if (completed === undefined) {
    next({
      status: 400,
      message: 'Project completion status is missing',
    });
  } else {
    next();
  }
}

module.exports = {
  validateProjectID,
  validatePost,
  validateUpdatedPost,
};
