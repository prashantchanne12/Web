// FETCH API

fetch('todos/jake.json').then(response => {
    console.log(response);
    // Returns PROMISE
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); 