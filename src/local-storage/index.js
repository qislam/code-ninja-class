
function createTask() {
    const newTask = document.getElementById('task');
    const taskList = localStorage.taskList ? JSON.parse(localStorage.taskList) : [];
    taskList.push(newTask.value);
    newTask.value = '';
    localStorage.taskList = JSON.stringify(taskList);

    refreshTaskList();
}

function refreshTaskList() {
    const taskList = localStorage.taskList ? JSON.parse(localStorage.taskList) : [];
    const taskListElement = document.getElementById('task-list');

    while (taskListElement.firstChild) {
        taskListElement.removeChild(taskListElement.firstChild);
    }
    
    for (let task of taskList) {
        const taskItem = document.createElement('li');
        taskItem.innerText = task;
        taskListElement.appendChild(taskItem);
    }
}
