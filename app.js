//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')
//Event-Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//Functions
function addTodo(event) {
    //Prevent form from submitting 
    event.preventDefault();
    //ToDo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); 
    //Todo List
    const newToDo = document.createElement("li");
    newToDo.innerText = todoInput.value;
    newToDo.classList.add("todo-item");
    todoDiv.appendChild(newToDo);
    //Checkmark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear Todo INPUT VALUE
    todoInput.value = " ";
}

    function deleteCheck(e) {
        const item = e.target;
        //DELETE TODO
        if(item.classList[0] === "trash-btn") {
            const todo = item.parentElement;
            //ANIMATION
            todo.classList.add("fall");
            todo.addEventListener("transitionend", function() {
                todo.remove();
            })
            
        }

        //CHECK MARK
        if(item.classList[0] === "complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }
    }

    function filterTodo(e) {
        const todos = todoList.childNodes;
        todos.forEach(function(todo){
            switch(e.target.value){
                case "all" : 
                    todo.style.display = "flex";
                    break;
                case "completed" :
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    } else{
                        todo.style.display = none;
                    }
                    break;
                case "incompleted" :
                    if(!todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    } else{
                        todo.style.display = none;
                    }
                    break;
            }
        });
    }

    function saveLocalTodos(todo){
        //CHECK
        let todos;
        if(localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }

        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }