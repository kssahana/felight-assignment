class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes noise`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} barks`);
    }
}

let d = new Dog('German shepherd');
d.speak();