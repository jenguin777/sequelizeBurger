module.exports = (sequelize, DataTypes) => {
  const burger = sequelize.define('burger', {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    toppings: DataTypes.STRING

  }, {});
  burger.associate = function(models) {
    // associations can be defined here
  };
  return burger;
};