const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        collector: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Collection, {
      foreignKey: "user_id",
      as: "userColletions",
    });
  }
}

module.exports = User;
