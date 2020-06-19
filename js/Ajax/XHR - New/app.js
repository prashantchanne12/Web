const request = new XMLHttpRequest();
const getTodos = (callback) => {
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('Could not fetch data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
}

getTodos((err, data) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log(data);
    }
});



