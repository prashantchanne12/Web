// ASYNC & AWAIT

// aysnc() always returns promise
const getTodos = async () => {
    const response = await fetch('todos/jake.json');

    if (response.status !== 200) {
        throw new Error('Can not fetch the data');
    }

    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

