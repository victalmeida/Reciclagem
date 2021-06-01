const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        cep: DataTypes.STRING,
        logradouro: DataTypes.STRING,
        numero: DataTypes.STRING,
        bairro: DataTypes.STRING,
        localidade: DataTypes.STRING,
        uf: DataTypes.STRING,
        complemento: DataTypes.STRING,
        latitude: DataTypes.STRING,
        lontitude: DataTypes.STRING,
        complemento: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Collection, {
      foreignKey: "address_id",
      as: "addressColetions",
    });
  }
}

module.exports = Address;
