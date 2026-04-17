'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
          // id: DataTypes.INTEGER,
        //   currentNumber: DataTypes.INTEGER,
        //     maxNumber: DataTypes.INTEGER,
        //     date: DataTypes.DATE,
        //     timeType: DataTypes.STRING,
        //     doctorId: DataTypes.INTEGER,
        id: {
            allowNull: false,
            autoIncrement: true,//tự động tăng chỉ áp dụng cho kiểu INT
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        currentNumber:{
            type: Sequelize.INTEGER
        },
        maxNumber:{
            type: Sequelize.INTEGER
        },
        date:{
            type: Sequelize.DATE
        },
        timeType:{
            type: Sequelize.STRING
        },
        doctorId:{
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
    await queryInterface.dropTable('Schedules');
  }
};