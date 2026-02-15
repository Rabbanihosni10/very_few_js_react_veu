class Vehivle{
    #tin;

    constructor(type,brand,price){
        this.type=type;
        this.brand=brand;
        this.price=price;
        this.#tin=123;
    }
    getThis(){
        console.log(this);
    }
    getPrice(){
        return this.price;
    }
    getTin(){
        return this.#tin;        
    }
}
const car1=new Vehivle('Tobarok','Toyota',100000);
const car2=new Vehivle('Car','Marsidice',500000);
car2.getPrice();

car1.getThis();
console.log(car2.getPrice());
console.log(car1.getPrice());
// console.log(car1.#tin);    this cant be shown outside as it is a private thing
console.log(car1.getTin());


const student={
    name:'Rahul Dravid',
    score:1000,
    getScore: function(){
        console.log(this);
    },
    getScoreArrow: ()=>{
        console.log(this);
    }
}

student.getScore();
student.getScoreArrow();
