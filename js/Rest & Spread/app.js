//-------- REST PARAMETER --------
// bundles the spread elements into array
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num ** 2);
}

const result = double(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(result);

// RESULT
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// [1, 4, 9, 16, 25, 36, 49, 64, 81]


//-------- SPREAD SYNTAX (ARRAYS)--------
// spreads the element from array
const city = ['Mumbai', 'LA', 'California']
console.log(...city);

const all_cities = ['Delhi', 'Kolkata', ...city];
console.log(all_cities);

//-------- SPREAD SYNTAX (OBJECT)--------
const person = {
    name: 'Prashant',
    age: 19,
    gender: 'male'
};
console.log(person);

//This doesn't create create copy rather this points to the same object
// const personClone = person; 

// This is making the copy of full object not pointing to the object
const personClone = { ...person };
console.log(personClone);
