import { styleBody, addTitle, contact } from './dom';

console.log('index file');

const greet = name => {
    console.log(`hello ${name}`);
}
styleBody();
addTitle('Hello World');
console.log(contact);

