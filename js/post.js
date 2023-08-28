const postUrl = 'https://jsonplaceholder.typicode.com/posts';

function loadPosts() {
    fetch(postUrl)
        .then(res => res.json())
        .then(posts => displayPosts(posts));
}

function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
        const divPost = document.createElement('div');
        divPost.innerHTML = `
            <h4>Id - ${post.id}</h4>
            <p>Title - ${post.title}</p>
            <p>Post Description : ${post.body}</p>
        `;
        postContainer.appendChild(divPost);
        divPost.classList.add('post');
    }
}

loadPosts();