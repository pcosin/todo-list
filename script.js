// Get de the variables from the DOM
import { addTask } from "./components/addTask.js";

import { readTask } from "./components/readTask.js";

const btnAddTask = document.querySelector("[data-form-btn]");

btnAddTask.addEventListener("click", addTask)


readTask()






