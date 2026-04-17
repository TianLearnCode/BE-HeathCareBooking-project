'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailDCS', {
          // id: DataTypes.INTEGER,
            // doctorId: DataTypes.INTEGER,
            // clinicId: DataTypes.INTEGER,
            // specialtyId: DataTypes.INTEGER,
        id: {
          allowNull: false,
          autoIncrement: true,//tự động tăng chỉ áp dụng cho kiểu INT
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        doctorId:{
          type: Sequelize.INTEGER
        },
        clinicId:{
            type: Sequelize.INTEGER
        },
        specialtyId:{
            type: Sequelize.INTEGER
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
    await queryInterface.dropTable('DetailDCS');
  }
};