// SETS - Unique values

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add(100);
set1.add('Hello');
set1.add({ name: 'Prashant' });
set1.add(true);

console.log(set1);

const set2 = new Set(['hello', 'world', 200, 300, 200]);
console.log(set2);

// Get Count'
console.log(set1.size);
console.log(set2.size);

// Check values
console.log(set1.has(100));

// Delete
set1.delete(100);
console.log(set1);

// Iterations
set2.forEach((element) => {
    console.log(element);
});

// Convert to SET to ARRAY
const setArray = Array.from(set1);
console.log(setArray);

// Rest with sets
const nums = new Set([1, 2, 4, 4]);
console.log(nums);

const arr = [...nums];
console.log(arr);

// add
const names = new Set();
names.add('Logan').add('Jake');
names.add('Logan')

// delete
names.delete('Logan');

// size
console.log(names.size);

// has
console.log(names.has('Logan'));

console.log(names);

// clear
names.clear();
console.log(names);
