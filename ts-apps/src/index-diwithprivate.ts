
class Logger {
    constructor() {

    }
    log(message: string) {
        console.log(message)
    }
}

class UserService {
    constructor(private logger: Logger) { }
    findAll() {
        this.logger.log('fetch users')
        return 'Users'
    }
}
class UserController {
    // private userService: UserService
    constructor(private userService: UserService) {// this.userService = userService
    }
    init() {
        console.log(this.userService.findAll())
    }
}
let usrCtrl = new UserController(new UserService(new Logger()))
usrCtrl.init()