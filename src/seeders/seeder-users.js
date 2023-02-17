'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users', [{
      password: 'lampro123',
      email: 'ngobaolam2002@gmail.com',
      firstName: 'Ngo',
      lastName: 'Lam',
      address: 'Da Nang City',
      phonenumber: '0981866071',
      gender: 1,
      roleId: 'ROLER1',
      positionId: 'Doctor',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
