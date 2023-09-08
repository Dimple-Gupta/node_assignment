import UserServices from "../services/userServices";
import { Login } from "../services/login";

const userServiceInstance=new UserServices()
const loginServiceInstance= new Login()

class UserController{
    async getAllUsers(req:any,res:any){
        try{
            const users= await userServiceInstance.getAllUser();
            return(users)
        }catch(err){
            console.error('error in reading the data')
        }
    }
    async createUser(req:any,res:any){
        try{
            const data=await userServiceInstance.createUser(req,res)
            return(data)
        }catch(err:any){
            console.log(err)
        }
    }
    async updateUser(req:any,res:any){
        try{
            const data=await userServiceInstance.updateUser(req,res)
            return(data)
        }catch(err:any){
            console.log(err)
        }
    }
    async deleteUser(req:any,res:any){
        try{
            const data=await userServiceInstance.deleteUser(req,res)
            return(data)
        }catch(err:any){
            console.log(err)
        }
    }
    async getUserById(req:any,res:any){
        try{
            const data=await userServiceInstance.getUserById(req,res)
            return(data)
        }catch(err:any){
            console.log(err)
        }
    }
    async login(req:any,res:any){
        try{
            const data=await loginServiceInstance.login(req,res)
            return(data)
        }catch(err:any){
            console.log(err)
        }
    }
    async logout(req:any,res:any){
        try{
            const data=await loginServiceInstance.logout(req,res)
            return(data)
        }catch(err:any){
            console.log(err)
        }
    }
}
 export default UserController