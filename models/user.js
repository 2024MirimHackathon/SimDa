const {DataTypes} = require("sequelize");

const User = sequelize => sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // 기본 키로 설정
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  timestamps: false,
});

module.exports = User;