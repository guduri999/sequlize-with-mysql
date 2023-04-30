import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../config/database.js";

export const Courses = sequelizeConnection.define('Courses', {
    CoursesId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CourseDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    CourseDuration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CourseLevel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CourseCategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CoursePrice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CourseSyllabus: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})

