const sequelize = require('../config/config');
const User = require('./user')(sequelize);
const Letter = require('./letter')(sequelize);

module.exports = {
  User,
  Letter
};
