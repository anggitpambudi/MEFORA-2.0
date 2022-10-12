'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class konsul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      konsul.belongsTo(models.biodata, {
        foreignKey: 'pasien_id',
        as: 'pasien'
      });
      konsul.belongsTo(models.biodata, {
        foreignKey: 'dokter_id',
        as: 'dokter'
      });
    }
  }
  konsul.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    pasien_id: DataTypes.UUID,
    dokter_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'konsul',
  });
  return konsul;
};