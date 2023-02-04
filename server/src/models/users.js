const { DataTypes } = require("sequelize");
const database = require("../db");
const { Coment } = require("./coment");


const Users = database.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
 
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    profile_img: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, {freezeTableName: true});



Users.hasMany(Coment)
Coment.belongsTo(Users)

module.exports = {Users};