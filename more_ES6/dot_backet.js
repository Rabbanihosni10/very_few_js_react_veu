const student ={
    name: 'Rafid',
    1: 50,
    'home-address':'kochukhet',
    marks: 90,
    family: {
        member:2,
        new:1,
        mother: {
            name: 'Noor Jahan',
            age:45
        }
    }
}

//Dot notation
const studentName= student.name;
console.log(student);

//back notation
const valueOne=student['1'];
console.log(valueOne);
console.log(student['1']);

const studentName2=student['name'];
console.log(student['home-address']);

for (const key in student){
    const value=student.key;
}

console.log(student.family);
console.log(student.family.mother.age);