'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product_Image = sequelize.define('Product_Image', {
    product_id: DataTypes.INTEGER,
    image_path: DataTypes.STRING,
    is_featured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product_Image;
};