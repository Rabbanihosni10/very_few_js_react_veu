/**
 * Undefined --> not defined
 */

let money;
console.log(money);

function total(a,b){
    console.log(a,b);
    const sum=a+b;
    console.log('Total is', sum);
}
total();

const result= total(5,7);
console.log(result);

//if we console anything in function without returing then it will show undefined


function total1(a,b){
    console.log("Value of perameters",a,b);
    if( a === undefined || b === undefined){
        return;
    }
    if (a && b){
        const sum=a+b;
        return sum;
    }
}

const result2=total1(1);
console.log(result2);w