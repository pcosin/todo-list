import { creatTask } from "./addTask.js";

export const readTask = () => {
    const list = document.querySelector("[data-list]");

    console.log(list)

    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    console.log(taskList)

    taskList.forEach((task) => {
        list.appendChild(creatTask(task))   
    });
}