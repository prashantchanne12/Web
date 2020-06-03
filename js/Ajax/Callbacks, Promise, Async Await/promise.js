const posts = [
    { title: 'Post 1', body: 'This is Body 1' },
    { title: 'Post 2', body: 'This is Body 2' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    });
}
// createPost({ title: 'Post 3', body: 'This is Body 3' })
// .then(getPosts)
// .catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 100;

Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
});