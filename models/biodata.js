'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      biodata.hasMany(models.konsul, {
        foreignKey: 'pasien_id',
        as: 'pasien'
      });
      biodata.hasMany(models.konsul, {
        foreignKey: 'dokter_id',
        as: 'dokter'
      });
      biodata.belongsTo(models.user, {
        foreignKey: 'users_id',
        as: 'user'
      });
      biodata.belongsToMany(models.speciality, {
        foreignKey: 'biodata_id',
        through: models.speciality_biodata,
        as: 'speciality'
      });
      biodata.belongsToMany(models.disease, {
        foreignKey: 'biodata_id',
        through: models.disease_biodata,
        as: 'disease'
      });
    }
  }
  biodata.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    birth: DataTypes.DATE,
    users_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'biodata',
  });
  return biodata;
};