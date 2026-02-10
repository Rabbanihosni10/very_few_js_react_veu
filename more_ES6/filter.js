const numbers=[1,2,4,5,6,10,45,3,7];

const greaterThan10=numbers.filter(x=> x>10);
const greaterThan102=numbers.map(x=> x>10);


const evenNumbers=numbers.filter(num=>num%2==0);

console.log(greaterThan10);
console.log(greaterThan102);

console.log(evenNumbers);
