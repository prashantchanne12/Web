// --------- LOCAL STORAGE ---------

// ADD ITEM
localStorage.setItem('name', 'Prashant');
localStorage.setItem('age', 30);

// GET ITEM
name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

// UPDATE ITEM
localStorage.setItem('name', 'Jake');
localStorage.name = 'Logan';

name = localStorage.getItem('name');

console.log(name, age);

// REMOVE ITEM
localStorage.removeItem('name');
name = localStorage.getItem('name');

console.log(name, age);

// CLEAR LOCALSTORAGE
localStorage.clear();