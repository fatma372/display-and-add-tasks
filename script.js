const tasks = [
    "Study javaScript",
    "Sleep at 1AM",
    "Wake up early at 8AM",
    "Do your task"
]
function showTasks(event) {
    event.preventDefault()
    const newTask = document.querySelector(".new-task").value
    tasks.push(newTask)
    const taskList = document.querySelector(".all-tasks");
     taskList.textContent = "";
    for (let i = 0; i < tasks.length; i++) {
        const newSpan = document.createElement("span");
        newSpan.textContent = `${i+1}- ${tasks[i]}`;
        taskList.appendChild(newSpan);
    }
    document.querySelector(".tasks-length").textContent = tasks.length

}
const taskList = document.querySelector(".all-tasks");
     taskList.textContent = "";
    for (let i = 0; i < tasks.length; i++) {
        const newSpan = document.createElement("span");
        newSpan.textContent = `${i+1}- ${tasks[i]}`;
        taskList.appendChild(newSpan);
    }
    
document.querySelector(".tasks-length").textContent = tasks.length
document.querySelector(".task-form").onsubmit = showTasks
