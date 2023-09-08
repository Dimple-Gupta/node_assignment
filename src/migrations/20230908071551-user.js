'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users',{
    id:{
      DataType: UUID,
      allowNull: false,
      defaultValue: UUID
    },
    firstName:{
      DataType: String.Sequelize,
      allowNull: false
    },
    lastName:{
      DataType: String.Sequelize,
      allowNull: false
    },
    email:{
      DataType:String.Sequelize,
      allowNull:false
    },
    password:{
      DataType:String.Sequelize,
      allowNull:false
    },
    token:{
      DataType:String.Sequelize,
      allowNull:true
    },
    isEmailVerified:{
      DataType:Boolean.Sequelize,
      defaultValue:false,
      allowNull:false
    }
  })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  }
};
