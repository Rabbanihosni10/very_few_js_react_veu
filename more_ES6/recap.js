// var let const
// const 
const tax=500;
const eta =5;

const student= {name:'Nayeem', marks: 59};
// eta=2;
const friends=['asfd','adsa','ads'];

//function

function add(a,b){
    console.log(a+b);
}
add(4,5);

//default perameter
function add1(a=2,b=1){
    console.log(a+b);
}
add1();

//template string
const dynamicText=`My Tax: ${tax} and marks ${student.marks*1.2} and friends ${friends[1]}`;

const innerHTML=`
    <div>
        <h1></h1>
    </div>
`

//arrow functuon
const add2=(num1,num2)=>num1+num2;

//xingle perameter
const tenFlims=x=>x+19;

//spread operator
const newFriends=[...friends,'bulbul','abul'];

//distructuring
const {marks:totalMarl}=student;
console.log(totalMarl,age=0);

const [firstFriemd]= friends;