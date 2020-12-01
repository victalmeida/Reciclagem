const {Model, DataTypes} = require('sequelize');

class Collection extends Model
{
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER ,
            address_id: DataTypes.INTEGER ,
            reciclado_id: DataTypes.STRING,
            complemento: DataTypes.STRING,
            status: DataTypes.STRING,
        },{
            sequelize
        });
    }


}


module.exports = Collection ;