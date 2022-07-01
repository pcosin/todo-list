export const readTask = () => {
    const taskList = JSON.parse(localStorage.getItem("task")) || []
    console.log(taskList)
}