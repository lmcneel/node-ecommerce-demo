'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product_Product = sequelize.define('Product_Product', {
    product_id: DataTypes.INTEGER,
    related_product_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product_Product;
};