'use strict';
module.exports = {
      up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable('allcodes', {
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
                  type: {
                        allowNull: false,
                        type: Sequelize.STRING
                  },
                  valueEn: {
                        allowNull: false,
                        type: Sequelize.STRING
                  },
                  valueVi: {
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
            await queryInterface.dropTable('allcodes');
      }
};