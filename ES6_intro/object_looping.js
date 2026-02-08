const numbers=[1,2,3,43,45,65];

for(const num of numbers){
    console.log(num);
}

// for of --> array
// for in --> object


const employee={
    name: 'Raja Rani',
    designation: 'QA',
    salary:20000,
    experience:1,
    age: 22
};

for(const key in employee){
    const value= employee[key];
    console.log(key,value);
}
