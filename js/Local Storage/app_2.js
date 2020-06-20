const todos = [
    { title: 'Do Chores', author: 'Prashant' },
    { title: 'Play Cricket', author: 'Jake' },
    { title: 'Water Plants', author: 'Logan' }
];

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const data = localStorage.getItem('todos');

console.log(JSON.parse(data));

JSON.parse(data).forEach(element => {
    console.log(`${element.title} - ${element.author}`);
});
