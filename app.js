// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);


// Functions

function addTodo(event){
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Crate LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML ='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    // Check Mark Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    // APPEND TO LIST
    todoList.appendChild(todoDiv);
    // Clear Todo Input Value
    todoInput.value = "";
}


function deleteCheck(e){
    const item = e.target;

    // Delete To Do
    if(item.classList[0] == "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitioned", function(){
            todo.remove();
        });
    }

    // Check Mark
    if(item.classList[0] == "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
