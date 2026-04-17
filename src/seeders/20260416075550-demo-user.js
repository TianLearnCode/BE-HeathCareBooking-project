'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Jone',
      lastName: 'Kim',
      email: 'Example@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),

    }])

  },

  async down (queryInterface, Sequelize) {
    /** chayj rollback
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
