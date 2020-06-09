class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        this.chatroom.send(message, this, to);
    }

    receieve(message, from) {
        console.log(`${from.name} to ${this.name} : ${message}`);
    }
}

class chatRoom {
    constructor() {
        this.members = {};
    }

    addMember(member) {
        this.members[member.name] = member;
        member.chatroom = this;
    }

    send(message, from, to) {
        to.receieve(message, from);
    }
}


// Creating Users
const john = new User('John');
const logan = new User('Logan');

// User {name: "John", chatroom: null}
console.log(john);
// User {name: "Logan", chatroom: null}
console.log(logan);


const chat = new chatRoom();
chat.addMember(john);
chat.addMember(logan);
console.log(chat.members);


john.send('Hello World', logan);
logan.send('hola', john);
