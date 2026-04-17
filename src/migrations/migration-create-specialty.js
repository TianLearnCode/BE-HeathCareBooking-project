'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Specialties', {
          // id: DataTypes.INTEGER,
        //   description: DataTypes.TEXT,
        //     name: DataTypes.STRING,
        //     image: DataTypes.STRING,
        //     doctorId: DataTypes.INTEGER,
        id: {
            allowNull: false,
            autoIncrement: true,//tự động tăng chỉ áp dụng cho kiểu INT
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        description:{
            type: Sequelize.TEXT
        },
        name:{
            type: Sequelize.STRING
        },
        image:{
            type: Sequelize.STRING
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
    await queryInterface.dropTable('Specialties');
  }
};