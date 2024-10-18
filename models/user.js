const {DataTypes} = require("sequelize");

const User = sequelize => sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // 기본 키로 설정
    autoIncrement: true,
    allowNull: false
  },
  password: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  timestamps: false,
});

module.exports = User;