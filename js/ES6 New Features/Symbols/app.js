// Create a Symbol

const sym1 = Symbol();
const sym2 = Symbol('Hello');

console.log(sym1);
console.log(sym2);
console.log(typeof sym2);

// Symbols are always unique. they can never be same
console.log(Symbol(123) === Symbol(123)); // --> false

// Unique Object Keys
const key1 = Symbol();
const key2 = Symbol();

const myObj = {}

myObj[key1] = 'Prop1';
myObj[key2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// {Symbol(): "Prop1", Symbol(): "Prop2"}Symbol(): "Prop1"Symbol(): "Prop2"__proto__: Object
console.log(myObj);

// Prop1
console.log(myObj[key1]);
// Prop2
console.log(myObj[key2]);

// Symbols are not enumerable in for....in
// It will only console log key3 and key4 bcoz of above reason
for (let i in myObj) {
    console.log(i);
}

// Symbols are ignored by Json.strignify
console.log(JSON.stringify(myObj));
