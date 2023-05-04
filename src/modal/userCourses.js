
import { sequelizeConnection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const userCourses = sequelizeConnection.define('userCourses', {
    userCourseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CoursesId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})