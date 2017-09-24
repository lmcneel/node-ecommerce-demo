'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order_Product = sequelize.define('Order_Product', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order_Product;
};