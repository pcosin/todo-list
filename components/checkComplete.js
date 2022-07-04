const checkCompleted = (id) => {
    let i = document.createElement("i");
    i.classList.add("far", "fa-regular", "fa-circle", "icon");
    i.addEventListener("click", (event) => taskCompleted(event, id));
    return i
  }
  

  // <i class="fa-regular fa-circle"></i>

  // <i class="fa-light fa-circle"></i>

  // <i class="fa-solid fa-circle-check"></i>
  
  const taskCompleted = (event, id) => {
  const eventToggle = event.target;
  const text = eventToggle.nextSibling;
  text.classList.toggle("crossOut") 
  eventToggle.classList.toggle("fas")
  eventToggle.classList.toggle("far")
  eventToggle.classList.toggle("completeIcon")
  const tasks = JSON.parse(localStorage.getItem('task'));
  const index = tasks.findIndex((item) => item.id === id)

  tasks[index]["completed"] = !tasks[index]["completed"]  
  localStorage.setItem('task', JSON.stringify(tasks));
 
  }

  export default checkCompleted


  