class Bird {
    // private fields
    #name;
    #home;
    constructor(name, home){
        this.#name = name;
        this.#home = home;
    }
    // getter. equivalent to 'obj.name;'
    get name(){
        return this.#name;
    }
    // setter
    relocate(newHome){
        this.#home = newHome;
    }
    // should be overridden
    makeSound(){
        console.log('!!It depends on the bird type!!');
    }
    // most birds fly
    fly() {
        console.log("I'm flying & it feels awesome!");
    }

    introduce(){
        console.log(`Hi, my name is ${this.#name}. I live at ${this.#home}.`);
    }
}

class Duck extends Bird { 
    constructor(name, home){
        // calling parents' constructor
        super(name, home);
    }
    // overriding
    makeSound(){
        console.log('quack quack');
    }
}

class Chicken extends Bird {
    // introducing new private field
    #eggs;
    constructor(name, home, eggs){
        super(name, home);
        this.#eggs = eggs;
    }
    // chicken can lay eggs (more functionallities)
    layEggs(num){
        this.#eggs += num;
    }
    // overriding
    makeSound(){
        console.log('cluck cluck');
    }
    // overriding the default behavior
    fly() {
        console.log('I cannot fly');
    }
    // extending the the default behavior
    introduce(){
        super.introduce();
        console.log(`I laid ${this.#eggs} eggs.`)
    }
}

// ========================
// quick example

let duck = new Duck('Donald Duck', 'Calisota');
let chicken = new Chicken('Miss Prissy', "Leghorn's yard", 5);

duck.introduce();
duck.makeSound();
duck.fly();

console.log('============');

chicken.introduce();
chicken.makeSound();
chicken.fly();
