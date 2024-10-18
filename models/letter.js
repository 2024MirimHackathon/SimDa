const { DataTypes } = require("sequelize");

const Letter = (sequelize) => 
  sequelize.define(
    "Letter", 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dear: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      image_path: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      fruit_kind: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      timestamps: false, 
    }
  );

module.exports = Letter;