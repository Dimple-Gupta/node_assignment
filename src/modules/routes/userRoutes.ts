import {Router} from"express"
import UserController from "../controller/userController"
import { create } from "domain";

class MainRouter{

    router: Router;
    user:UserController;
    constructor(){
        this.user= new UserController()
        this.router= Router()
        this.userRouters()
    }
    userRouters(){
        try{
            this.router.route('/user')
              .post(this.user.createUser)
            this.router.route('/updateuser')
              .patch(this.user.updateUser)
            this.router.route('/deleteuser')
              .delete(this.user.deleteUser)
            this.router.route('/getuserbyid')
              .get(this.user.getUserById)
            this.router.route('/alluser')
              .get(this.user.getAllUsers)
            this.router.route('/login')
              .get(this.user.login)
              this.router.route('/logout')
              .get(this.user.logout)
                        
        }catch(err:any){
            console.log(err)
        }
    }
}
export default new MainRouter().router