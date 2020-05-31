document.querySelector('#button1').addEventListener('click', function (event) {

    // Create XHR Object 
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'customer.json', true);

    // If the data is loaded
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log( this.responseText);
            const customer = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            document.querySelector('#customer').innerHTML = output;
        }
    }

    // Send request
    xhr.send();

    event.preventDefault();
});

document.querySelector('#button2').addEventListener('click', function (event) {

    // Create XHR Object 
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'customers.json', true);

    // If the data is loaded
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log( this.responseText);
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(customer => {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
                <hr>
            `;
            });



            document.querySelector('#customers').innerHTML = output;
        }
    }

    // Send request
    xhr.send();

    event.preventDefault();
});