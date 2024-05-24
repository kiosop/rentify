const Sequelize = require('sequelize');

const sequelize = new Sequelize('rentify','root','root',{
    dialect: 'mysql',
    host: 'localhost'
});

sequelize.sync()
  .then(() => {
    console.log('Database and tables synchronized successfully.');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

module.exports = sequelize; 