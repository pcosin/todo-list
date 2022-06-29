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

  export default checkCompleted