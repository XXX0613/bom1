let task = [];
let currentFilter = "all";

const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

const taskTnput = document.getElementById("taskInput");

function addTask() {
    const currenTaskCount = task.length + 1;
    if (taskTnput.value === "") {
        alert("任务不能为空");
    }

    if (){}

    const newTask = {
        id: Date.now(),
        text: taskTnput.value,
        completed: false,
        createAt: new Date(),
    }

    task.push(newTask);
    taskTnput.value = "";
}