//private instance variables and methods

class Secret {
    private password:string ='Abc123'

    private generatePassword():string {
        return this.password + Math.random()
    }
}
let auth = new Secret()
// console.log(auth.password)
//  console.log(auth.generatePassword())