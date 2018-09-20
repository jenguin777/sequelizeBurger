module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,35]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    }, {});
      Burger.associate = function(models) {
        // associations can be defined here
      };
  return Burger;
};


