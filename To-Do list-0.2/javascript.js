let listData = [];

const addButton = document.querySelector("#myButton");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

window.onload = function() {
    const storedListData = localStorage.getItem("listData");
    if (storedListData) listData = JSON.parse(storedListData);
    renderListData();
    console.log(listData);
}


//Refactor list itemUI  
//use create element
//append child


function listItemUI(task, taskIdx) {
    // function for rendering the UI of each task
    // ternary for striking through completed tasks
    // concatenating the task value with the buttons
   return `     
    <div class='task' data-type="${taskIdx}">
        <p 
            style="display: inline; 
            text-decoration: ${task.completed ? "line-through" : "none"
        }">
            ${task.value}
        </p>
        <span>
            <button onclick='markCompleted(${taskIdx})'>complete</button>
            <button onclick='editTask(${taskIdx})'>edit</button>
            <button onclick='deleteTask(${taskIdx})'>delete</button> 
        </span>
    </div>
`;
}

function addTaskToList() {
    let taskText = taskInput.value.trim();
    if (taskText == "") return;{
     let taskItem = document.createElement("div");   
     let listItem = document.createElement("li");

    //  li - container
    // span -> to hold all list content
    // span.innerText = "input value"
    // span.appendChild(removeButton)
    // li append span

    // li and append to taskList
    
    // we are appending button and li to the div  
     taskItem.appendChild(listItem);
     listItem.textContent = taskText;

    // div to the big UL 
     taskList.appendChild(taskItem);
     listData.push({ value: taskText, completed: false});
     savedData();
     renderListData();
     taskInput.value = "";
     console.log(taskInput);
    } 
}

addButton.addEventListener("click", function () {
    addTaskToList();
});

taskInput.addEventListener("keypress", function(e) {
    if (taskInput.value.trim() === "");
    if (e.key === "Enter") {
        e.preventDefault();
        addTaskToList();
    }
});

function deleteTask(taskIdx) {
    let taskItem = document.querySelector(`[data-type="${taskIdx}"]`);
    if (taskItem) {
        taskItem.remove();
        listData.splice(taskIdx, 1);
        savedData();
        renderListData();
    }
}

function editTask(taskIdx) {
    let taskItem = document.querySelector(`[data-type="${taskIdx}"] p`);
    if (taskItem) {
        let newTaskValue = input("Edit task:", taskItem.textContent);
         if (newTaskValue !== null && newTaskValue.trim() !== "") {
            listData[taskIdx].value = newTaskValue.trim();
            savedData();
            renderListData();
        }
    }
} 

function markCompleted(taskIdx) {
    listData[taskIdx].completed = !listData[taskIdx].completed;
    savedData();
    renderListData();
}


//local storage
function savedData() {
    localStorage.setItem("listData", JSON.stringify(listData));
}

function loadData() {
    const storedData = JSON.parse(localStorage.getItem('listData'));
    if (storedData) {
        // document.getElementById('#taskItem').value = storedData.taskItem;
        // document.getElementById('#listItem').value = storedData.listItem;
        listData = storedData.listData || [];
    }
}


function renderListData() {
    const listContainer = document.getElementById("taskList");
    listContainer.innerHTML = "";
    for (let i = 0; i <listData.length; i++) {
        listContainer.innerHTML += listItemUI(listData [i], i)
    } 
    
     
}

loadData();
renderListData();

addButton.addEventListener("click", function () {
    console.log("I hope I can get this to work");
    taskList.innerHTML += listItemUI({ value: taskInput.value, completed: false }, listData.length);
    listData.push({ value: taskInput.value, completed: false });
    savedData();
    taskInput.value = "";
});

