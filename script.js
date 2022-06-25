// Get de the variables from the DOM

const btnAddTask = document.querySelector("[data-form-btn]");


const creatTask = (e) => {
  e.preventDefault()
  const inputTask = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]")
  const task = document.createElement("li")
  task.classList.add("card")
  const value = inputTask.value
  inputTask.value = ""

 
  const content = `
  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>
`

task.innerHTML = content
list.appendChild(task)

}


btnAddTask.addEventListener("click", creatTask) 