const tastInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [
    {
        text:"ffff4",createdAt:new Date(2025, 1, 14),
    },{
        text:"7767764",createdAt:new Date(2025, 1, 16),
    }
];

function update() {
    taskList.innerHTML = '';
    taskList.forEach(task => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        li.appendChild(span);
        taskList.appendChild(li);
    })
}

function addTask() {
    if(!tastInput.value) {
        alert('please enter a task');
        return;
    }
    const newtask = {
        text: tastInput.value,
        createdAt: new Date(),
    };
    tasks.push(newtask);
    tastInput.value = '';
    update();
}
addBtn.addEventListener('click',addTask);
update()