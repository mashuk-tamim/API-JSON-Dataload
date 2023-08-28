const toDosUrl = 'https://jsonplaceholder.typicode.com/todos';

function LoadToDos() {
    fetch(toDosUrl)
        .then(res => res.json())
        .then(toDos => displayToDos(toDos));
}

function displayToDos(toDos) {
    const toDosContainer = document.getElementById('toDos-container');
    let count = 1;
    for (const toDo of toDos) {
        console.log(toDo);
        const toDoDiv = document.createElement('div');
        toDoDiv.innerHTML = `
            <h4>User: ${toDo.userId}</h4>
            <p>To-Do ${count}: ${toDo.title}</p>     
        `;
        toDosContainer.appendChild(toDoDiv);
        toDoDiv.classList.add('toDo');
        count++;
        if(count === 21){
            count = 1;
        }
    }
}

LoadToDos();