const Sequelize = require('sequelize');
const sequelize = require('../database/connect');

const userModel = sequelize.define('propertyTable',{
    propertyId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    propertyTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    propertyOwnerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    propertyOwnerName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    propertyOwnerContactPhoneNumber: {
        type: Sequelize.BIGINT,
    },
    propertyOwnerContactEmail: {
        type: Sequelize.STRING,
    },
    propertyType: {
        type: Sequelize.ENUM("APARTMENT","VILLA","FARMHOUSE","STUDIO","PENTHOUSE","PG")
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nearbyLandmark: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    bedroomCount: {
        type: Sequelize.INTEGER,
    },
    nearbyCollegeDistance: {
        type: Sequelize.INTEGER,
    },
    nearbyHospitalDistance: {
        type: Sequelize.INTEGER,
    }
    

}); 

module.exports = userModel; 