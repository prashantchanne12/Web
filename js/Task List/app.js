// Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all Event Listeners
loadEventListeners();

function loadEventListeners() {
    // DOM Load Event
    // This gets called right after the dom is loaded
    document.addEventListener("DOMContentLoaded", getTasks);
    // Add task event
    form.addEventListener("submit", addTask);
    // Remove task event
    taskList.addEventListener("click", removeTask);
    // Clear task event
    clearBtn.addEventListener("click", clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from Local Storage
function getTasks(event) {
    let tasks;

    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function (task) {
        // Create li element
        const li = document.createElement("li");
        // Add a class
        li.className = 'collection-item';
        // Create Text Node and append to li
        li.appendChild(document.createTextNode(task));

        // Create new link element
        const link = document.createElement("a");
        // Add a class
        link.className = "delete-item secondary-content";
        // Add icpn HTML
        link.innerHTML = '<i class="fa fa-remove"></li>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(event) {

    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement("li");
    // Add a class
    li.className = 'collection-item';
    // Create Text Node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement("a");
    // Add a class
    link.className = "delete-item secondary-content";
    // Add icpn HTML
    link.innerHTML = '<i class="fa fa-remove"></li>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in Local Storae
    storeTaskInLocalStorage(taskInput.value);

    // clear input
    taskInput.value = "";

    event.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
    let tasks;

    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Remove Task
function removeTask(event) {
    if (event.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are You Sure?")) {
            event.target.parentElement.parentElement.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(event.target.parentElement.parentElement);
        }
    }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            // at index remove 1 item
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Clear Tasks
function clearTasks(event) {
    // taskList.innerHTML = '';

    // Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // CLear from Local Storage
    clearTaskFromLocalStorage();
}

// Clear Tasks from Local Storage
function clearTaskFromLocalStorage() {
    localStorage.clear();
}

// Filter tasks
function filterTasks(event) {
    const text = event.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function (task) {
        // Loop through each li check its content
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";

        }
    });
}

