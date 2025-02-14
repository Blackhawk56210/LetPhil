function listItemUI(listItems, taskIdx) {
     // function for rendering the UI of each task
     // terniary for striking through completed tasks
     // concatenating the task value with the buttons
    return `     
    <div class='list-item'
    data-type="${taskIdx}">
      <p style="display: inline; text-decoration: ${
        task.completed ? "line-through" : "none"
      }">${task.value}</p>
      <span>
        <button onclick='markCompleted(${taskIdx})'>complete</button>
        <button onclick='editTask(${taskIdx})'>edit</button>
        <button onclick='deleteTask(${taskIdx})'>delete</button> 
      </span>
    </div>
`;
}

const addButton = document.querySelector("#myButton");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

window.onload = function() {
    console.log("loaded")
    const storedThemeValue = localStorage.getItem("theme")
    console.log('storedThemeValue =', storedThemeValue)
    document.body.style.background = storedThemeValue === "dark" ? "#e66465" : "#9198e5";
    document.body.style.color = storedThemeValue === "dark" ? "#9198e5" : "#e6`6465";
}



function addTaskToList() {
    let taskText = taskInput.value;
    if (taskText !== "") {
        
     let taskItem = document.createElement("div");   
     let listItem = document.createElement("li");
     let taskRemover = document.createElement("button");

    //  li - container
    // span -> to hold all list content
    // span.innerText = "input value"
    // span.appendChild(removeButton)
    // li append span

    // li and append to taskList

     taskRemover.addEventListener("click", function(){
        .text.innerHTML = "delete";
        // .remove removes the element that it is on
        taskItem.remove();
     })   

    // we are appending button and li to the div  
     taskItem.appendChild(listItem);
     taskItem.appendChild(taskRemover);
     listItem.textContent = taskText;

    // div to the big UL 
     taskList.appendChild(taskItem);
     taskInput.value = "";
     console.log(taskInput);
    } 
}


addButton.addEventListener("click", function () {
    addTaskToList();

});

//local storage

function savedData() {
    taskItem = document.getElementById('#taskItem');
    listItem = document.getElementByID('#listItem'); 
    localStorage.setItem("listData", JSON.stringify({taskItem, listItem}));
}

function loadData() {
    const storedData = JSON.parse(localStorage.getItem('listData'));
    if (storedData) {
        document.getElementById('#taskItem').value = storedData.taskItem;
        document.getElementById('#listItem').value = storedData.listItem;
        listData = storedData.listData || [];
    }
}


function renderListData() {
    const listContainer = document.getElementById("listContainer");
    listData.innerHTML = "";
    for (let i = 0; i <listData.length; i++) {
        listContainer.innerHtml += listData [i]
    } 
    
     
}

//let loadData() ; localStorage.getItem("listData");
  //   if (loadData()) listData = JSON.parse(loadData);

loadData();
renderListData();
////
function setTheme(theme)  {
    localStorage.setItem("theme", theme);
    document.body.style.background = theme === "dark" ? "#e66465" : "#9198e5";
    document.body.style.color = theme === "dark" ? "#9198e5" : "#faf5f5";
}

//edit/clear

const clearButton = document.getElementById('clear');


taskInput.addEventListener("keyup", function(e) {
    if(taskInput.value.trim() === "") return alert("add input value...")
    // if('expected result') return
    console.log('keyup =', e.key);
    console.log('taskInput.key =', taskInput.key)
    if (e.key === "Enter") {
        addTaskToList()
        // let listItem = document.createElement("li");
        // listItem.innerText = taskInput.value;
        // //listItem.preventDefault();
        // // console.log("Entered value:", taskInput);
        // taskList.appendChild(listItem);
    }
});
//
//
const tasks = [
    { id: 1, name: 'Grocery Shopping', completed: false },
    { id: 2, name: 'Pay Bills', completed: true }
];
//


//Cookies – Small pieces of data sent with every request. They have an expiration date and are often used for tracking users. example:
//document.cookie = "username=JohnDoe; expires=Thu, 18 Dec 2023 12:00:00 UTC";

//SessionStorage – Stores data for a session. Once you close the tab, the data disappears. example:
//sessionStorage.setItem("username", "JohnDoe");

//LocalStorage – Stores data indefinitely. Even if you close and reopen your browser, the data remains. example:
//localStorage.setItem("username", "JohnDoe");


//LocalStorage provides four main methods:
//setItem(key, value) – Saves data.
//getItem(key) – Retrieves data.
//removeItem(key) – Deletes a specific item.
//clear() – Removes all stored data.