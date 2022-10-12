'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.role, {
        foreignKey: 'roles_id'
      });
      user.hasOne(models.biodata, {
        foreignKey: 'users_id',
        as: 'user'
      });
    }
  }
  user.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roles_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};