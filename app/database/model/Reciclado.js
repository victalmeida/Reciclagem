const { Model, DataTypes } = require("sequelize");

class Reciclado extends Model {
  static init(sequelize) {
    super.init(
      {
        categoria: DataTypes.STRING,
        descricao: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Collection, {
      foreignKey: "reciclado_id",
      as: "recicladoCollections",
    });
  }
}

module.exports = Reciclado;
