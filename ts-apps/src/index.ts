import { firstName, lastName } from './util/myuitl'
import { UserController } from './controllers/user.controler'
import { UserService } from './services/user.service'

console.log(`Name ${firstName} ${lastName}`)


function main() {
    const userCtrl = new UserController(new UserService())
    userCtrl.init()
}
main()