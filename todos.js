var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')




var todos = JSON.parse(localStorage.getItem("todo_during_quarentine")) || [];

function runTodo() {
    listElement.innerHTML = '';


    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('\xa0      \xa0\xa0      Excluir \xa0\xa0');
        linkElement.setAttribute('href', '#')

        pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick", 'deleteTodo(' + pos + ')')

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
        todoElement.appendChild(linkElement);

    }

}
runTodo();

function addTodo() {
    var inputText = inputElement.value;

    todos.push(inputText);
    inputElement.value = '';
    runTodo();
    saveTodos()
}
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    runTodo();
    saveTodos()
}

function saveTodos() {
    localStorage.setItem('todo_during_quarentine', JSON.stringify(todos))
}

