'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('speciality_biodata', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      biodata_id: {
        type: Sequelize.UUID,
        references: {
          model: 'biodata',
          key: 'id'
        }
      },
      speciality_id: {
        type: Sequelize.UUID,
        references: {
          model: 'specialities',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('speciality_biodata');
  }
};