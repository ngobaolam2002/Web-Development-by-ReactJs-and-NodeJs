'use strict';
module.exports = {
      up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable('schedules', {
                  id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                  },
                  currentNumber: {
                        allowNull: false,
                        type: Sequelize.INTEGER
                  },
                  maxNumber: {
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
                  doctorId: {
                        allowNull: false,
                        type: Sequelize.INTEGER
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
            await queryInterface.dropTable('schedules');
      }
};