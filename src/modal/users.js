import { sequelizeConnection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Users = sequelizeConnection.define('Users', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DateOFBorth: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
