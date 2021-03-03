const todoInput = document.querySelector(".todo-input");
const todoBtn =  document.querySelector(".todo-button");
const todoList =  document.querySelector(".todo-list");

todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);

function addTodo(evt){
    evt.preventDefault();

    const newtodoDiv = document.createElement('div');
    newtodoDiv.classList.add("todo");

    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    newtodo.classList.add("todo-item");
    newtodoDiv.appendChild(newtodo);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class = "fas fa-check"></i>';
    completedBtn.classList.add("completed-btn");
    newtodoDiv.appendChild(completedBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class = "fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    newtodoDiv.appendChild(trashBtn);

    todoList.appendChild(newtodoDiv);
    todoInput.value = "";

}

function deletecheck(e){
    const item = e.target;

    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    
    
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}