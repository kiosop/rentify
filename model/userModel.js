const Sequelize = require('sequelize');
const sequelize = require('../database/connect');

const userModel = sequelize.define('logintable',{
    userId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM("SELLER","BUYER")
    }
}); 

module.exports = userModel; 