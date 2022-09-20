import { User } from "../types/user.type"

export class UserService {
    constructor() {

    }
    findAll(): Array<User> {
        return [{ id: 1, name: 'a1' },{ id: 2, name: 'a2' },{ id: 3, name: 'a3' }]
    }

}