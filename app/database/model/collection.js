const { Model, DataTypes } = require("sequelize");

class Collection extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        address_id: DataTypes.INTEGER,
        reciclado_id: DataTypes.STRING,
        complemento: DataTypes.STRING,
        status: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "collectionUser",
    });
    this.belongsTo(models.Address, {
      foreignKey: "address_id",
      as: "collectionAddress",
    });
    this.belongsTo(models.Reciclado, {
      foreignKey: "reciclado_id",
      as: "collectionReciclado",
    });
    this.belongsTo(models.Collectstatus, {
      foreignKey: "status",
      as: "collectionStatus",
    });

    this.hasMany(models.CollectionColetor, {
      foreignKey: "collection_id",
      as: "collectionCollectionCollector",
    });
  }
}

module.exports = Collection;
