class Vehicle {

}

class Boat extends Vehicle {
    swim () {
        console.log("swim")
    }
}
class Car extends Vehicle {
    drive (){
        console.log("drive")
    }
}
class Plane extends Vehicle {
    fly (){
        console.log("fly")
    }
}

const boat = new Boat();
boat.swim();
const car = new Car();
car.drive();

const plane = new Plane();
plane.fly();
