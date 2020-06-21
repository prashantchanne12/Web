class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chat = db.collection('chats');
        this.unsub;
    }

    async addChat(message) {

        // FORMAT A CHAT OBJECT
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now),
        };

        // SAVE THE CHAT DOCUMENT
        const response = await this.chat.add(chat);

        return response;
    }

    getChats(callback) {
        this.unsub = this.chat
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        // UPDATE THE UI
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateName(username) {
        this.username = username;
        localStorage.setItem('username', username);
    }

    updateRoom(room) {
        this.room = room;
        console.log('room updated');
        if (this.unsub) {
            this.unsub();
        }
    }
}



// const chat = new Chatroom('gaming', 'prash');

// setTimeout(() => {
//     chat.updateRoom('general');
//     chat.getChats((data) => {
//         console.log(data);
//     });
//     chat.addChat('helo')
// }, 3000);

// chat.addChat('Hola')
//     .then(() => {
//         console.log('chat added!');
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//     });