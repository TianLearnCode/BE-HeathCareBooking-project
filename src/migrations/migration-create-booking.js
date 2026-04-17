'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
        // id: DataTypes.INTEGER,
        // statusId: DataTypes.STRING, //key cua Allcode
        // docctorId: DataTypes.INTEGER, //id cua user
        // patientId: DataTypes.INTEGER, //id cua user
        // date: DataTypes.DATE,
        // timeType: DataTypes.STRING, 
        // token: DataTypes.STRING,
        id: {
            allowNull: false,
            autoIncrement: true,//tự động tăng chỉ áp dụng cho kiểu INT
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        statusId:{
            type: Sequelize.STRING
        },
        docctorId:{
            type: Sequelize.INTEGER
        },
        patientId:{
            type: Sequelize.INTEGER
        },
        date:{
            type: Sequelize.DATE
        },
        timeType:{
            type: Sequelize.STRING
        },
        token:{
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
    await queryInterface.dropTable('Bookings');
  }
};