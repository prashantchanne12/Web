// Iterators
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ?
                { value: names[nextIndex++], done: false } :
                { done: true }
        }
    }
}

const namesArr = ['A', 'B', 'C', 'D'];

const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

// -----------------------------------------

// Generators
function* sayNames() {
    yield 'Prashant';
    yield 'Jake';
    yield 'Logan';
}

const name = sayNames();

console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());


// Generators 
function* generateId() {
    let index = 1

    while (true) {
        yield index++;
    }
}

const ids = generateId();

console.log(ids.next());
console.log(ids.next());
console.log(ids.next());