class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

//Dog class
class Dog extends Animal{
    constructor(name,bread){
        super();
        this.bread=bread;
    }
    intro(){
        console.log(`This is ${this.name}\n This is ${this.bread}`);
    }
    eat(){
        console.log(`${this.name} is eating!`);
    }
    bark(){
        console.log(`${this.name} is barking!`);
    }
}

//Cat Class
class Cat extends Animal{
    constructor(name,bread,age){
        this.name=name;
        this.bread=bread;

    }
    intro(){
        console.log(`This is ${this.name}\n This is ${this.bread}`);
    }
    eat(){
        console.log(`${this.name} is eating!`);
    }
    meow(){
        console.log(`${this.name} is barking!`);
    }
}

const dog= new Dog('Coffee','Deshi');
dog.eat();
dog.intro();
dog.bark();
console.log(dog);

const cat= new Cat('SP','Persian',5);
cat.eat();
console.log(cat);

class Bird{
    constructor(name,bread,age,color){
        this.name-name;
        this.bread=bread;
        this.age=age;
        this.color=color;
    }
    eat(){
        console.log(`Bird ${this.name} is drinking water!`);
    }
    fly(){

    }
}

const bird=new Bird('Doeel','BD',5,'Black');
