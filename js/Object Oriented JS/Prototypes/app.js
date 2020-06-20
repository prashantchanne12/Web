// Constructor Function
function User(username, age) {
    this.username = username;
    this.age = age;
}

// Prototype Functions'
User.prototype.login = function () {
    console.log(`${this.username} has logged in`);
}

// Prototyple Inheritance
function Admin(username, email, title) {
    User.call(this, username, email);
    this.title = title;
}

// Copying / Inheriting User Prototypes Methods in Admin Prototype
Admin.prototype = Object.create(User.prototype);

// Prototype Only Accessible by Admin
Admin.prototype.deleteUser = function () {
    console.log('delete user');
}

const u1 = new User('Prashant', 19);
const u2 = new User('Jake', 29);
const u3 = new Admin('Logan', 30, 'Racer');

console.log(u1);
console.log(u2);
console.log(u3);
u1.login();
u3.login();
u3.deleteUser();