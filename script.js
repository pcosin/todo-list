// Get de the variables from the DOM
import checkCompleted from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btnAddTask = document.querySelector("[data-form-btn]");


const creatTask = (e) => {
  e.preventDefault()
  const inputTask = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]")
  const task = document.createElement("li")
  task.classList.add("card")
  const value = inputTask.value
  inputTask.value = ""
  const taskContent = document.createElement("div");
 
  const taskValue = document.createElement("span");
  taskValue.classList.add("task");
  taskValue.innerHTML = value;
  taskContent.appendChild(checkCompleted())
  taskContent.appendChild(taskValue)
  

  task.appendChild(taskContent)
  task.appendChild(deleteIcon())
  list.appendChild(task)

}


btnAddTask.addEventListener("click", creatTask) 







