const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const EmailCode = sequelize.define('emailcode', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //aqui iria el user que generamos con la relacion en el index
});

module.exports = EmailCode;