'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clinics', {
          // id: DataTypes.INTEGER,
        //   address: DataTypes.STRING,
        //     name: DataTypes.STRING,
        //     image: DataTypes.STRING,
        //     description: DataTypes.TEXT,
        id: {
            allowNull: false,
            autoIncrement: true,//tự động tăng chỉ áp dụng cho kiểu INT
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        address:{
            type: Sequelize.STRING
        },
        name:{
            type: Sequelize.STRING
        }, 
        image:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.TEXT
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
    await queryInterface.dropTable('Clinics');
  }
};