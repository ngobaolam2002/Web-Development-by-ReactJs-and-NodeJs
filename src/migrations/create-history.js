'use strict';
module.exports = {
      up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable('histories', {
                  id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                  },
                  patientId: {
                        allowNull: false,
                        type: Sequelize.INTEGER
                  },
                  doctorId: {
                        allowNull: false,
                        type: Sequelize.INTEGER
                  },
                  description: {
                        allowNull: false,
                        type: Sequelize.TEXT
                  },
                  files: {
                        type: Sequelize.TEXT
                  },
                  createAt: {
                        allowNull: false,
                        type: Sequelize.DATE
                  },
                  updateAt: {
                        allowNull: false,
                        type: Sequelize.DATE
                  }
            });
      },
      down: async (queryInterface, Sequelize) => {
            await queryInterface.dropTable('histories');
      }
};