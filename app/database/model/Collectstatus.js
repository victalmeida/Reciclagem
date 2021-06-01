const { Model, DataTypes } = require("sequelize");

class Collectstatus extends Model {
  static init(sequelize) {
    super.init(
      {
        description: DataTypes.STRING,
      },
      {
        freezeTableName: true,
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Collection, {
      foreignKey: "status",
      as: "statusCollection",
    });
  }
}

module.exports = Collectstatus;
