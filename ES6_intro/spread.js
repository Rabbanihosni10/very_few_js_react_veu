const numbers = [87,8,5,5,91];
console.log(numbers);
console.log(...numbers);


// const max= Math.max(21,56,94,112,54,23);
// const max=Math.max(numbers);
const max=Math.max(...numbers);
console.log(max);


//non-premitive
// const first = [1,2,3,4,5];
// const second = first;
// second.push(6);
// console.log(first);


const first = [1,2,3,4,5];
const second = [...first];
const third = [...first, 92,97,45,13];
second.push(6);
console.log(first);
console.log(second);
console.log(third);

const age1=[12,23,54];
const age2=[23,34,56];
const all=[...age1,555,...age2];
const person= { name: 'Permision',age : 25};
const employee= {designation: 'dev',...person};
console.log(all);
console.log(employee);

const total = (a,b,c)=> a+b+c;
const result= total(45,65,31);
const digits=[78,98,45];
total(...digits);
