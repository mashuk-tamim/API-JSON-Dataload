// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';

function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

function loadUsers(){
    fetch(usersUrl)
        .then(res => res.json())
        .then(users => displayUsers(users));
}

function displayUsers(users){
    const ul = document.getElementById('user-list');
    for(const user of users){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}