document.querySelector('#button').addEventListener('click', function (event) {

    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    // Type of request / Data or URL / Is Asynchronous
    xhr.open('GET', 'data.txt', true);

    // If data is loaded do this
    xhr.onload = function () {
        // this -> xhr
        if (this.status === 200) {
            // console.log(this.responseText);
            document.querySelector('#output').innerHTML =
                `<p>${this.responseText}</p>`
        }
    }

    xhr.onerror = function () {
        console.log('Something Went Wrong!');
    }

    // Send request
    xhr.send();

    // HTTP STATUS
    // 200 - OK
    // 403 - Forbidden
    // 404 - Not Found

    // READY STATE VALUES
    // 0: requets not initialized
    // 1: server connection estblished
    // 2: request receieved
    // 3: processing request
    // 4: request fininshed and response is ready

    event.preventDefault();
});