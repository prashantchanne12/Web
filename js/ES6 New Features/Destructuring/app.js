// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// 100
console.log(a);
// 200
console.log(b);

[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

// -----------------------------------

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// 100, 200
console.log(a, b);
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// {c: 300, d: 400, e: 500}
console.log(rest);

// --------------- Array Destructuring -------------------

const people = ['Prashant', 'Logan', 'Jake'];

const [person1, person2, person3] = people;

// Prashant Logan Jake 
console.log(person1, person2, person3);

// --------------- Object Destructuring -------------------

const person = {
    name: 'Logan Paul',
    age: 23,
    city: 'LA',
    gender: 'Male',
    sayHello: function () {
        console.log('Hello');
    }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city

// New ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city);
sayHello();