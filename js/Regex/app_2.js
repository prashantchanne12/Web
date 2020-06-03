let re;

// -------- Literal Characters ---------

re = /hello/;
re = /hello/i;

// --------  Meta character symbols ---------

re = /^hel/i;     // Must starts with
re = /d$/i;       // Must ends with
re = /^hello$/;   // Must start and ends with hello

// Wildcards 
re = /^hello..orld/;        // Matches any single character (letter, digit, whitespace, everything).
re = /^h*/;        // Matches any 0 or more character (letter, digit, whitespace, everything).
re = /gre?a?y/i; // Optional caharacter

// --------  Brackets [] - Character Set ---------

// [abc] -> matching specific characters
re = /gr[ae]y/i;  // Must be a or e
re = /gr[^ae]y/i;  // Match anything except a and e
re = /[a-zA-Z]ray/i;  // Match any letters
re = /[a-zA-Z0-9]ray/i;  // Match any letters and numbers

// --------  Braces {} - Quantifiers ---------

// convenient way is to specify how many repetitions of each character we want using the curly braces notation.
re = /hel{3}/;
re = /hel{1,3}/;
re = /hel{1,}/; // Must occure atleast 1 time



// String to match
// const str = 'hello world';
// const str = 'gray';
const str = 'helllo';

// Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);