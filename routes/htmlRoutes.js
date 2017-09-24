var homeController = require('../controllers/home');
module.exports = function(app) {
  // Is going to show the home page & call to action
  app.get('/', homeController.renderHome);
  app.get('/product/:id?/:metaName?', homeController.renderProducts);
  app.get('/checkout', homeController.renderCheckout);
  app.post('/checkout', homeController.postCheckout);
  app.get('/registration', homeController.renderRegistration);
  app.post('/registration', homeController.postRegistration);
  app.get('/login', homeController.renderLogin);
  app.post('/login', homeController.postLogin);
  app.get('/user', homeController.renderUser);
  app.put('/user', homeController.putUser);
  app.get('/thankyou', homeController.renderThanks);
  app.get('/user/order/:id?', homeController.renderOrders);




  // User Goes to a homepage
  // User Finds a product
  // User Adds Product To The Cart -> No route yet
  // User Decides to Checkout
      // If user not logged in
        // User goes to display for Registration <login>
  // Show Checkout
  // Post Check Page
  // Thank you


  // User goes homepage
  // User goes login
  // User goes homepage
};