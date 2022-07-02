
import { readTask } from "./readTask.js";

const deleteIcon = (id) => {
    let i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", () => deteteTask(id))
    return i
   }
   
const deteteTask = (id) => {
    const li = document.querySelector('[data-list]');
    const tasks = JSON.parse(localStorage.getItem('task'));

    const index = tasks.findIndex((item) => item.id === id);

    
    tasks.splice(index, 1);
    li.innerHTML = '';
    localStorage.setItem('task', JSON.stringify(tasks));
    readTask()
  
} 

export default deleteIcon;
