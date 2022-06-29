// Get de the variables from the DOM

( () => {
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
  taskContent.appendChild(checkCompleted())
  const taskValue = document.createElement("span");
  taskValue.classList.add("task");
  taskValue.innerHTML = value
  taskContent.appendChild(taskValue)
  const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>
`
  task.appendChild(taskContent)
  list.appendChild(task)

}


btnAddTask.addEventListener("click", creatTask) 


const checkCompleted = () => {
  let i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", taskCompleted);
  return i
}


const taskCompleted = (event) => {
const eventToggle = event.target;
const text = eventToggle.nextSibling;
text.classList.toggle("crossOut") 
eventToggle.classList.toggle("fas")
eventToggle.classList.toggle("far")
eventToggle.classList.toggle("completeIcon")
}

})()
