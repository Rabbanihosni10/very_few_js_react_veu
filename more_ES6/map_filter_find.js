const students=[
    {id:1,name:'abul',marks:50},
    {id:2,name:'Nabul',marks:70},
    {id:3,name:'Kabul',marks:40},
    {id:4,name:'Tabul',marks:90},
]

const names = students.map(student=>student.name);
const marks = students.map(student=>student.marks*0.75);
const goodStudent=students.filter(student=>student.marks>60);
const goodStudent1=students.find(student=>student.marks>60);
console.log(names);
console.log(marks);
console.log(goodStudent);
console.log(goodStudent1);