console.log(add(5,3));


// function declaration 
function add(num1,num2){
    return num1+num2;
}

//function expression
const addition = function(nu1,nu2){
    return nu1+nu2;
}

const result=addition(13,12);
console.log(result);


// arrow function 

const add2 = (num3,num4)=> num3+num4;

console.log(add2(1,2));
const mul=(b,c)=> b*c;

console.log(mul(4,2));

const do_math = (x,y)=> {
    const a=x**2;
    const b= y**2;
    const result= a+b;
    return result;
}

// one line arrow function --- implecit
//