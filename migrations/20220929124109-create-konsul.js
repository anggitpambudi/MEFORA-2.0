'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('konsuls', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      pasien_id: {
        type: Sequelize.UUID,
        references: {
          model: 'biodata',
          key: 'id'
        }
      },
      dokter_id: {
        type: Sequelize.UUID,
        references: {
          model: 'biodata',
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
    await queryInterface.dropTable('konsuls');
  }
};