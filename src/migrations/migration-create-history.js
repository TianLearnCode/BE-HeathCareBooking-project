'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histories', {
          // id: DataTypes.INTEGER,
        //  patientId: DataTypes.INTEGER,
        //     doctorId: DataTypes.INTEGER,
        //     description: DataTypes.TEXT,
        
        //file: DataTypes.STRING,
        id: {
            allowNull: false,
            autoIncrement: true,//tự động tăng chỉ áp dụng cho kiểu INT
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        patientId:{
            type: Sequelize.INTEGER
        },
        doctorId:{
            type: Sequelize.INTEGER
        },   
        description:{
            type: Sequelize.TEXT
        },
        files:{
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
    await queryInterface.dropTable('Histories');
  }
};