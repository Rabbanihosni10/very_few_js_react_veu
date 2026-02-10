const numbers = [4,8,2,3,5];
// const doubled=[]
// for (const num of numbers){
//     const result=num*2;
//     doubled.push(result);
// }
// console.log(doubled);
// const doubleIt=x=>x*2;
// const doubled = numbers.map(doubleIt)


const doubled=numbers.map(x=>x*2);
const fiveTimes=numbers.map(num=>num*5);
const squared=numbers.map(num=>num*num);
console.log(doubled);
const friends=['zayed','ravel','nobel'];

const nameLengtgs=friends.map(name=>name.length);
const firstLetters=friends.map(nam=>nam[0]);
const lower=friends.map(name=>name[0].toLowerCase());
const upper=friends.map(name=>name[0].toUpperCase());
const result=numbers.map((num,index)=>{
    return num*index;
})

console.log(nameLengtgs);
console.log(firstLetters);
console.log(lower);
console.log(upper);
console.log(result);