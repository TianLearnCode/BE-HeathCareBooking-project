'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Levels', {
          // id: DataTypes.INTEGER,
          // key: DataTypes.STRING,
          // type: DataTypes.STRING,
          // valueEN: DataTypes.STRING,
          // valueVI: DataTypes.STRING,
          
        id: {
            allowNull: false,
            autoIncrement: true,//tự động tăng chỉ áp dụng cho kiểu INT
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name:{
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
    await queryInterface.dropTable('Levels');
  }
};