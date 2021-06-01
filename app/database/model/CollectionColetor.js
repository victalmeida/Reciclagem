const { Model, DataTypes } = require("sequelize");

class CollectionColetor extends Model {
  static init(sequelize) {
    super.init(
      {
        collection_id: DataTypes.STRING,
        user_id: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "relation_collection_collector",
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    // this.belongsTo(models.Collection, {
    //   foreignKey: "collection_id",
    //   as: "collectionColletorcollection",
    // });
    // this.belongsTo(models.User, {
    //   foreignKey: "user_id",
    //   as: "collectionColletorUser",
    // });
  }
}

module.exports = CollectionColetor;
