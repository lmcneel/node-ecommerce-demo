var testApiController = require('../controllers/api');
module.exports = function(app) {
  app.get('/test', testApiController.index);
}; 