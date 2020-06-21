// DOM QUERIES
const chatList = document.querySelector('.chat-list');
const chatForm = document.querySelector('.new-chat');
const nameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-message');
const rooms = document.querySelector('.chat-rooms');


// NEW CHAT
chatForm.addEventListener('submit', e => {
    e.preventDefault();

    const message = chatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => {
            chatForm.reset()
        })
        .catch(err => {
            console.log(err);
        });
});

// UPDATE USERNAME
nameForm.addEventListener('submit', e => {
    e.preventDefault();

    // UPDATE THE NAME
    const username = nameForm.name.value.trim();
    chatroom.updateName(username);

    // RESET THE FORM
    nameForm.reset();

    // SNACKBAR
    updateMessage.innerText = `Your name was updated to ${username}`;
    setTimeout(() => updateMessage.innerText = '', 3000)

});

// UPDATE CHAT ROOMS
rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear();

        chatroom.updateRoom(e.target.id);

        chatroom.getChats(data => {
            chatUI.render(data);
        });
    }
});

// CHECK LOCAL STORAGE FOR NAME
const username = localStorage.getItem('username') ? localStorage.getItem('username') : 'Anonymous';

// CLASS INSTANCES
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// GET CHATS AND RENDER
chatroom.getChats(data => {
    chatUI.render(data);
});
