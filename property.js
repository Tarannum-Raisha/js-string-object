const person = {
    name : 'kamal uddin ',
    age : 25,
    work : 'developer',
    income : 2400000,
    married: true,
    'fevourite place': 'kuakata'
}


const profession  = 'work';
 person[profession] = 'teacher';
console.log(person);


// dot notation
// console.log(person.age);


// const salary = person.income;
// console.log(salary);


// bracket notation
console.log(person['age']);

const boyosh = person['age'];
console.log(boyosh);

console.log(person['fevourite place']);