// all html element selected variables are here
const taskInput = document.querySelector("#task-input");
const submitBtn = document.querySelector(".input_submit");
const taskContainer = document.querySelector("#task-container");

// validation and task adding functionality is here
submitBtn.addEventListener("click", () => {
  const taskText = taskInput?.value;

  if (taskText?.length > 0) {

    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
        <input type="checkbox" name="" id="">
        <h3 class="task-text">Food ordering</h3>
        <button class="option-btn">
            <img width="20px" src="images/trash.png" alt="">
        </button>
    `;

    taskContainer.appendChild(taskItem);
    taskInput.value = ""
  } else {
    alert("Please input your task!");
  }
});
