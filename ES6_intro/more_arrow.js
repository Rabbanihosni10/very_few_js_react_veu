
//20% discount on 500 tk
// (20/100)*500
const getTax = (amount,taxRate)=>{
    const tax= amount*(taxRate/100);
    const total_oayt = (amount,tax) =>tax+  amount;

}

//single perameter
const getSquare = (x) => x*x; 

const getHalf = num => num/2;
console.log(getHalf(2));
console.log(getSquare(2));

//without any perameter
const logIt = () => console.log(78);
console.log(logIt());

//annymous functon 
// document.getElementById('').addEventListener('click',event=>{})

    document.getElementById('btn-click').addEventListener('click',event={
        
    })