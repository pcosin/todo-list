const deleteIcon = () => {
    let i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deteteTask)
    return i
   }
   
   const deteteTask = (event) => {
     event.target.parentElement.remove()
   } 

export default deleteIcon;
