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
