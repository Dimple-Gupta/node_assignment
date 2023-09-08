import jwt from 'jsonwebtoken'
import User from '../model/user'
import UserServices from './userServices'
import { where } from 'sequelize'

const secretKey= "your-secret-key"

const userServiceInstance= new UserServices()
const TOKEN= 'register'

export class Login{
    async login(req:any,res:any){
        try{
            const email= req.body.email
            const password=req.body.password

            const user= await User.findOne({where:{email:email,password:password}})
            if(!user){
                console.log('user not registered')
            }
            if(user){
            // create token
            const token=jwt.sign({
                user_id: user.datavalues.id,email,password
            },
            TOKEN,
            {expiresIn:"1h"})
            function secret(token:string) {
                try{
                   const payload=jwt.verify(token,secretKey,{algorithms:["HS256"]})as {email:string}
                   return payload.email;
                }catch(err){
                    return null
                }
            }
            // store token
            user.datavalues.token=token;

            const userUpdate=await User.update({isEmailVerified:true,token:token},{where:{email:email,password:password}})

            req.body.verify=token
            const key= await User.findOne({where:{email:email}})
            return (key)
        }
        return ({email})
    }catch(err){
        console.log(err)
    }
    }
    async logout(req:any,res:any){
        try{
            const email= req.body.email
            const result=await User.findOne( {where:{email:email}})
            if(!result){
                console.log('user not found')
            }
            const user= await User.update({isEmailVerified:false,token:null},{where:{email:email}})
            return('logout sucessfully')
        }catch(err){
            console.log(err)
        }
    }
}