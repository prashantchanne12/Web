document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event) {

    const number = document.querySelector('#number').value;

    // Create xhr object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    // Once data is loaded
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if (response.type === 'success') {
                response.value.forEach(item => {
                    output += `<li>${item.joke}</li>`
                });


            } else {
                output += '<li> Something went wrong </li>'
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    // Send Request
    xhr.send();


    event.preventDefault();
}