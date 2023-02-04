const DataTypes = require("sequelize");
const database= require("../db");



const Coment = database.define(
    "comentarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    { timestamps: false, freezeTableName: true }
);



module.exports = { Coment };