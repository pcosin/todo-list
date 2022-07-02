const checkCompleted = (id) => {
    let i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (event) => taskCompleted(event, id));
    return i
  }
  
  
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
 
  console.log(index)
  }

  export default checkCompleted