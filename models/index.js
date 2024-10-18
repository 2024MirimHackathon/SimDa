const sequelize = require('../config/config');
const User = require('./user')(sequelize);

module.exports = {
  User,
};
