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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({ title: 'Post 3', body: 'This is Body 3' },getPosts);

