//base class

class Account {
    constructor(){
        console.log('Account class')
    }
}
class SavingsAccount extends Account{
    constructor(){
        super()
        console.log('SavingsAccount class')
    }
}
let sb = new SavingsAccount()