const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {

            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Could not fetch data');
            }

        });

        request.open('GET', resource);
        request.send();
    });


};

// Chaining Promises
getTodos('prashant.json').then(data => {
    console.log(data);
    // Now this whole thing return Promise beacuse of below return statement
    // That's why we can chain on then() 
    return getTodos('jake.json');

}).then(data => {
    console.log(data);
    return getTodos('logan.json');

}).then(data => {
    console.log(data);

}).catch(err => {
    // Catches every error occurred in whichever then()
    console.log('Rejected: ', err);
});


// PROMISES

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve - Success, reject - Error  
//         resolv e('data');
//         // reject('error');
//     });
// }

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

