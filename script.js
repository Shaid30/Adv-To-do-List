let todoForm = document.getElementById("todoForm")
let searchInput = document.getElementById("searchInput");
let allBtn = document.getElementById("allBtn");
let completedBtn = document.getElementById("completedBtn");
let pendingBtn = document.getElementById("pendingBtn");
let totalCount = document.getElementById("totalCount");
let completedCount = document.getElementById("completedCount");
let pendingCount = document.getElementById("pendingCount");
let todoList = document.getElementById("todoList");
let addTask = document.getElementById("addTask");

let tasks =[];

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    let task = addTask.value;
    tasks.push(task)
    displayTask();

});

function displayTask(){
    todoList.innerHTML = "";
    tasks.forEach(function(task){
        let li = document.createElement("li")
        li.innerText = task
        todoList.appendChild(li);
        
    })
        
}