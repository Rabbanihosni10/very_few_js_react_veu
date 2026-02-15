

/**
 * class ==>Template
 * properties
 * method( a special type of function inside a class without the function keyword)
 * 
 * object
 * 
 * 
 */
// onabort
const plt=2;

class Player{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.location="Bangladesh";
        // console.log(`Secure the Goal Method: ${name}`);
        // console.log('Calling the constructor Method!');

    }
    
    goal(){
        console.log(`Score a Goal!!`);


    }
    
    getTeamName(){
        return 'Borsha';
    }



 

}

// const player=new Player();
// player.goal();
// console.log(player);

const player=new Player('Tom',11);
const player1= new Player("Bebu",21);
// const player2= new Player()
console.log(player);
console.log(player1);

//instanceof means from where it is made of

console.log(player instanceof Player);