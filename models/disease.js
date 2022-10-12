'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      disease.belongsToMany(models.biodata, {
        through: models.disease_biodata
      });
    }
  }
  disease.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    disease_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'disease',
  });
  return disease;
};