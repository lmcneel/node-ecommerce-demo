'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product_Review = sequelize.define('Product_Review', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product_Review;
};