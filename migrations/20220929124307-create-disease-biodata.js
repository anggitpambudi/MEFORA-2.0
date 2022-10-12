'use strict';

const { UUIDV4 } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('disease_biodata', {
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
      disease_id: {
        type: Sequelize.UUID,
        references: {
          model: 'diseases',
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
    await queryInterface.dropTable('disease_biodata');
  }
};