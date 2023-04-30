import { Sequelize } from "sequelize";

export const sequelizeConnection = new Sequelize({ database: 'test', host: 'localhost', username: 'root', dialect: 'mysql', password: '' })



