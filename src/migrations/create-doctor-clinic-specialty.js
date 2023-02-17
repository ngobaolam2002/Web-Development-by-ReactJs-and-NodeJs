'use strict';
module.exports = {
      up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable('doctor_clinic_specialty', {
                  id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                  },
                  doctorId: {
                        allowNull: false,
                        type: Sequelize.INTEGER
                  },
                  clinicId: {
                        allowNull: false,
                        type: Sequelize.INTEGER
                  },
                  specialtyId: {
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
            await queryInterface.dropTable('doctor_clinic_specialty');
      }
};