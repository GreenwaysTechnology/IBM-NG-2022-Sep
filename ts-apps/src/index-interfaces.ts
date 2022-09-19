//interface

interface Fly {
    fly(): string
}
class Airplane implements Fly {
    fly(): string {
        return "AirPlane"
    }
}

let airPlane= new Airplane()
console.log(airPlane.fly())