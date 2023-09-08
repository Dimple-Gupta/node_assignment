const {Sequelize,DataTypes,UUID,UUIDV4}= require ('sequelize')
const sequelize= new Sequelize('sqlite::memory:')
import database from '../../config/db'

// Database connection instance
const databaseInstance= new database();

const User= databaseInstance.define('users',{
    id:{
        type:DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey:true,
        allownull:false,
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isEmailVerified:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    },
    token:{
        type:DataTypes.STRING,
        allowNull:true
    },

    createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
},{
    timestamps:true,
    createdAt:'createdAt',
    updatedAt:'updatedAt'
})
export default User;