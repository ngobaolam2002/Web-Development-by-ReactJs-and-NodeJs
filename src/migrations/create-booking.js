'use strict';
module.exports = {
      up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable('bookings', {
                  id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                  },
                  key: {
                        allowNull: false,
                        type: Sequelize.STRING
                  },
                  statusId: {
                        allowNull: false,
                        type: Sequelize.STRING
                  },
                  doctorId: {
                        allowNull: false,
                        type: Sequelize.INTEGER
                  },
                  patientId: {
                        allowNull: false,
                        type: Sequelize.INTEGER
                  },
                  date: {
                        allowNull: false,
                        type: Sequelize.DATE
                  },
                  timeType: {
                        allowNull: false,
                        type: Sequelize.STRING
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
            await queryInterface.dropTable('bookings');
      }
};