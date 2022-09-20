import { onInit } from "../core/controller.life";
import { UserService } from "../services/user.service";


export class UserController implements onInit {
    //di of userService
    constructor(private userService: UserService) { }

    init(): void {
       // console.log(this.userService.findAll())
       this.userService.findAll().forEach(user=>console.log(user))
    }

}