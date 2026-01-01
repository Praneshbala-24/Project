const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = loadTasks;

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = createTaskElement(taskText);
    taskList.appendChild(li);
    saveTasks();

    taskInput.value = "";
}

function createTaskElement(text) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">${text}</span>
        <button class="delete" onclick="deleteTask(this)">X</button>
    `;

    return li;
}

function toggleTask(task) {
    task.parentElement.classList.toggle("completed");
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}
