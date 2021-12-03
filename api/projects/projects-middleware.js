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

module.exports = {
    validateProjectID,
}
