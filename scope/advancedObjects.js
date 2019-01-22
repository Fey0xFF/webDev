// primitive types
// defined by the programming language

// reference type
// created by the programmer

let object1 = { value: 10 };
let object2 = object1;
console.log(object2 === object1);
let object3 = { value: 10 };
console.log(object3 === object1);


// context vs scope
function a() {
    let b = 1;
}

const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`I'm a wheeeeee!!! ${this.type}!`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');