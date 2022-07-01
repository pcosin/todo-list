import checkCompleted  from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";



export const creatTask = (e) => {
  e.preventDefault()
  const taskList = JSON.parse(localStorage.getItem("task")) || []
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
  taskList.push(value)

  console.log(taskList)

    localStorage.setItem("task", JSON.stringify(taskList))
  

}


