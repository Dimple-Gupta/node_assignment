import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

const sequelize= new Sequelize('node_assignment','root','1234',{
    dialect:'mysql',
    host:'localhost'
})
export default sequelize