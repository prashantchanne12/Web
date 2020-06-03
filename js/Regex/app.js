// https://regexone.com/

let re;

re = /Hello/;
re = /Hello/i; // i -> case insensitive
// re = /Hello/g; // Global Search -> Search for all the instances

// console.log(re);
// console.log(re.source);

// exec() -> Return result in an array if match or null
let res = re.exec('Hello world');

// ["Hello", index: 0, input: "Hello world", groups: undefined]
console.log(res);
console.log(res[0]);
console.log(res.index);
console.log(res.input);

// -------------- test() ------------------

// test() -> Returens true if match otherwise false
res = re.test('Hello world');

// true 
console.log(res);


// -------------- match() ------------------

// match() -> Return result in an array if match or null
let str = 'Hello There';

res = str.match(re);

// ["Hello", index: 0, input: "Hello There", groups: undefined]
console.log(res);

// -------------- search() ------------------

// search() -> Returns the index of the first match otherwise returns -1

str = 'Hello There';

res = str.search(re);

// returns 0 
console.log(res);

// -------------- replace() ------------------

// replace() -> Retuens new string with some or all matches of a pattern

str = 'Hello There';
let newStr = str.replace(re, 'Hi');

// Hi There
console.log(newStr);
