'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('markdowns', {
        // contentHTML: DataTypes.TEXT('long'),
        // contentMarkdown: DataTypes.TEXT('long'),
        // description: DataTypes.TEXT('long'),
        // doctorId: DataTypes.INTEGER,
        // specialtyId: DataTypes.INTEGER,
        // image: DataTypes.STRING,
        // clinicId: DataTypes.INTEGER,,
        id: {
            allowNull: false,
            autoIncrement: true,//tự động tăng chỉ áp dụng cho kiểu INT
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        contentHTML:{
            allowNull: false,
            type: Sequelize.TEXT('')
        },
        contentMarkdown:{
            allowNull: false,

            type: Sequelize.TEXT('')

        },
        description:  {
            allowNull: true,

            type: Sequelize.TEXT('')

        },
        doctorId:{
            allowNull: true,
            type: Sequelize.INTEGER


        },
        specialtyId:{
          allowNull: true,
            type: Sequelize.INTEGER
        },
        clinicId:{
            allowNull: true,    
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
    await queryInterface.dropTable('Markdowns');
  }
};