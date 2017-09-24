'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    order_status: DataTypes.STRING,
    billing_address_id: DataTypes.INTEGER,
    shipping_address_id: DataTypes.INTEGER,
    tracking_number: DataTypes.STRING,
    parcel_carriers: DataTypes.STRING
  });

  // Order.associate = function(models){
  //   Order.hasMany(models.product);
  // };

  return Order;
};