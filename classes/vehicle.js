class vehicle {
    make;
    color;
    constructor(make, color) {
        this.make = make;
        this.color = color;
    }
}

class Car extends vehicle {
    noOfWheels;
    constructor(noOfWheels, make, color) {
        super();
        this.noOfWheels = noOfWheels;
        this.make = make;
        this.color = color;
    }
}

let car1 = new Car(4, 2018, "black");
console.log(car1);