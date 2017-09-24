'use strict';
module.exports = (sequelize, DataTypes) => {
  var User_Address = sequelize.define('User_Address', {
    address_type: DataTypes.STRING,
    name: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    alias: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User_Address;
};