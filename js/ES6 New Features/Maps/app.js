// Maps -> Key, value pair

const map = new Map();

// Set keys
const key1 = 'Hello',
    key2 = {},
    key3 = function () { }

// Set map values by key
map.set(key1, 'Value 1');
map.set(key2, 'Value 2');
map.set(key3, 'Value 3');

// Chaining
map.set(key1, 'Value 1')
    .set(key2, 'Value 2')
    .set(key3, 'Value 3');

// Get values by key
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));


// Iterating Through Maps

// loops using for.....of
for (let [k, v] of map) {
    console.log(`${k} : ${v}`);
}
// only keys
for (let k of map.keys()) {
    console.log(`${k}`);
}
// only values
for (let v of map.values()) {
    console.log(`${v}`);
}

// loops using for.....each
map.forEach((k, v) => {
    console.log(`${k} - ${v}`);
});

// Convert to Arrays
const arr = Array.from(map);
console.log(arr);

// Convert to Arrays -> keys
const keyArr = Array.from(map.keys());
console.log(keyArr);

// Convert to Arrays -> values
const valArr = Array.from(map.values());
console.log(valArr);
