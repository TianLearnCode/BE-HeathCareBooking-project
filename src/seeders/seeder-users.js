'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    //   email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // phoneNumber: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // image: DataTypes.STRING,
    // roleId: DataTypes.STRING,
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
        
        email: 'admin@gmail.com',//email phải là duy nhất, ràng hợp lệ regex
        password: '123456', //hàm băm hash ràng buộc độ dài, ký tự đặc biệt
        firstName: 'Minh',
        lastName: 'Admin',
        address: 'HCM',
        phoneNumber: '0123456789',
        gender: 1,
        image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        roleId: '1',
        levelId: 1,
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
