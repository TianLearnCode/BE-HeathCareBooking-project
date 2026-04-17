'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
        // id: DataTypes.INTEGER,
        statusId: DataTypes.STRING, //key cua Allcode
        docctorId: DataTypes.INTEGER, //id cua user
        patientId: DataTypes.INTEGER, //id cua user
        date: DataTypes.DATE,
        timeType: DataTypes.STRING, 
        token: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};