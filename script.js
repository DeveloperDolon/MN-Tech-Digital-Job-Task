// all html element selected variables are here
const taskInput = document.querySelector("#task-input");
const submitBtn = document.querySelector(".input_submit");
const taskContainer = document.querySelector("#task-container");
let id = 1;


// task delete functionality is here
const handleDeleteTask = (id) => {
    const task = document.querySelector(`.task-${id}`);
    task.remove();
}


// validation and task adding functionality is here
submitBtn.addEventListener("click", () => {

  const taskText = taskInput?.value;

  if (taskText?.length > 0) {

    const taskItem = document.createElement("div");
    taskItem.classList.add("task", `task-${id}`);

    taskItem.innerHTML = `
        <input type="checkbox" name="" id="">
        <h3 class="task-text">${taskText}</h3>
        <button onclick="handleDeleteTask(${id})" class="option-btn">
            <img width="20px" src="images/trash.png" alt="">
        </button>
    `;

    taskContainer.appendChild(taskItem);
    taskInput.value = "";
    id++;
  } else {
    alert("Please input your task!");
  }
});
