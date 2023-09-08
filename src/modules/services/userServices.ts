import User from "../model/user";
import { DataTypes } from "sequelize";
//import{Jwt} from 'jsonwebtoken'

export class UserServices{
    async createUser(req:any,res:any){
        try{
            const firstName=req.body.firstName;
            const las=req.body.lastName;
            const email=req.body.email;
            const password=req.body.password

            //user Already exists or not?
            const userExist=await User.findOne({
                where:{email:email}
            })
            if(userExist){
                console.log('user already exists')
            }
            //create new user
            const user= await User.create(req.body)
            return(user)

        }catch(err:any){
            console.log(err)
        }
    }
    async updateUser(req:any,res:any){
        try{
            const userId= req.params.id
            const user= await User.findOne({where:{id:userId}})
            if(!user){
                console.log('usernot found')
            }
            const update= await User.update(req.body,{where:{id:userId}})
            const updatedUser= await User.findOne({where:{id:userId}})
            return (updatedUser)
        }catch(err:any){
            console.error(err)
        }
    }
    async deleteUser(req:any,res:any){
        try{
            const userId= req.params.id;
            const user= await userId.findOne({where:{id:userId}})
            if(!user){
                console.log('usernot found')
            }
            const deletedUser= await User.destroy({where:{id:userId}})
        }catch(err){
            console.error(err)
        }
    }
    async getUserById(req:any,res:any){
        try{
            const id= req.params.id
            const result= await User.findOne({where:{id:id}})
            if(!result){
                console.log('user not found')
            }
            return (result)
        }catch(err){
            console.error(err)
        }
    }
    async getAllUser(){
        try{
            const user= await User.findAll()
        }catch(err){
            console.error(err)
        }
    }
}
export default UserServices