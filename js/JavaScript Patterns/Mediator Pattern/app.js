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