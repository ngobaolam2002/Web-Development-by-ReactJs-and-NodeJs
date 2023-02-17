'use strict';
module.exports = {
      up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable('clinics', {
                  id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                  },
                  address: {
                        allowNull: false,
                        type: Sequelize.STRING
                  },
                  description: {
                        allowNull: false,
                        type: Sequelize.TEXT
                  },
                  image: {
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
            await queryInterface.dropTable('clinics');
      }
};