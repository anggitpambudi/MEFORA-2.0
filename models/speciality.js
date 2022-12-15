'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class speciality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      speciality.belongsToMany(models.biodata, {
        foreignKey: 'speciality_id',
        through: models.speciality_biodata,
        as: 'speciality'
      });
    }
  }
  speciality.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    speciality_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'speciality',
  });
  return speciality;
};