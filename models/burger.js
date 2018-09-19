module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('burger', {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    toppings: DataTypes.STRING

  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
  };
  return Burger;
};