import checkCompleted  from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (e) => {
    e.preventDefault()
    const inputTask = document.querySelector("[data-form-input]");
    const list = document.querySelector("[data-list]");
    const value = inputTask.value;
    inputTask.value = "";

    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    taskList.push(value)
    localStorage.setItem("task", JSON.stringify(taskList))

    const task = creatTask(value)
    list.appendChild(task)
}

export const creatTask = (value) => {

  const task = document.createElement("li")
  task.classList.add("card")
   
  const taskContent = document.createElement("div");

  const taskValue = document.createElement("span");
  taskValue.classList.add("task");
  taskValue.innerHTML = value;
  taskContent.appendChild(checkCompleted())
  taskContent.appendChild(taskValue)
  
  task.appendChild(taskContent)
  task.appendChild(deleteIcon())
  
  return task
 
 
   
}


