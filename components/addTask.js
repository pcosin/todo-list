import checkCompleted  from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (e) => {
    e.preventDefault()
    const inputTask = document.querySelector("[data-form-input]");
    const list = document.querySelector("[data-list]");
    const value = inputTask.value;
    inputTask.value = "";

    let completed = false;

    if(value == "") {
        return
    }

    const taskObj = {
        value,
        completed,
        id: uuid.v4()
    }
   
    const taskList = JSON.parse(localStorage.getItem("task")) || [];

    taskList.push(taskObj)
    console.log(taskObj)
    localStorage.setItem("task", JSON.stringify(taskList))

    const task = creatTask(taskObj)
    list.appendChild(task)
    
}

export const creatTask = ({value, completed, id}) => {

  const task = document.createElement("li")
  task.classList.add("card")
   
  const taskContent = document.createElement("div");

  const taskValue = document.createElement("span");
  taskValue.classList.add("task");
  taskValue.innerHTML = value;

  const check = checkCompleted(id)

  if (completed) {

    check.classList.toggle("crossOut") 
    check.classList.toggle("fas")
    check.classList.toggle("far")
    check.classList.toggle("completeIcon")
  }

  

  taskContent.appendChild(check)
  taskContent.appendChild(taskValue)
  
  task.appendChild(taskContent)
  task.appendChild(deleteIcon(id))
  
  return task
 
 
   
}


