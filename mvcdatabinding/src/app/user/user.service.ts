import { Injectable } from "@angular/core";
import { USER } from "../mockdata/user.mock";
import { USERS } from "../mockdata/users.list";
import { UserModule } from "./user.module";
import { User } from './user.type';


@Injectable({
    providedIn: 'root' // It uses root injector to create instance
    //providedIn:UserModule
})
export class UserService {
    constructor() {
        console.log('user service constructor is called')
    }
    //biz method
    //sync apis
    getUser(): User {
        return USER
    }
    getUsers(): Array<User> {
        return USERS
    }
    //async api :callback based api
    getUsersAsyncCB(callback: Function) {
        //return users data in delayed manner
        setTimeout(callback, 5000, USERS)
    }
    getUsersAsyncPromsie(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            //return users data in delayed manner
            setTimeout(resolve, 5000, USERS)
        })
    }
}