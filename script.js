// all html element selected variables are here
const taskInput = document.querySelector("#task-input");
const submitBtn = document.querySelector(".input_submit");
const taskContainer = document.querySelector("#task-container");
let id = 1;

// task delete functionality is here
const handleDeleteTask = (id) => {
  const task = document.querySelector(`.task-${id}`);
  task.remove();
  const localTasks = getTaskFromLocalStorage();
  const filteredTasks = localTasks?.filter((item) => item.id !== id); // task delete from local storage
  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
};

// task marking as completed functionality is here
const handleCompleteTask = (id) => {
  const taskParent = document.querySelector(`.task-${id}`);
  const task = document.querySelector(`#task-checkbox-${id}`);
  const taskText = taskParent.querySelector(".task-text");

  if (task.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
};

// task item get from localStorage
const getTaskFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  console.log(tasks);
  if (tasks?.length > 0) {
    return JSON.parse(tasks);
  }

  return [];
};

// task item add to localStorage
const handleLocalStorageAddTask = (item) => {
  const newTask = {
    id: id,
    task: item,
  };
  const preTasks = getTaskFromLocalStorage();

  localStorage.setItem("tasks", JSON.stringify([...preTasks, newTask]));
};

// validation and task adding functionality is here
submitBtn.addEventListener("click", () => {
  const taskText = taskInput?.value;

  if (taskText?.length > 0) {
    handleLocalStorageAddTask(taskText);

    const taskItem = document.createElement("div");
    taskItem.classList.add("task", `task-${id}`);

    taskItem.innerHTML = `
        <input type="checkbox" name="" onclick="handleCompleteTask(${id})" id="task-checkbox-${id}">
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

const mainFunc = () => {
  const allTasks = getTaskFromLocalStorage();

  allTasks?.forEach((item) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task", `task-${item?.id}`);

    taskItem.innerHTML = `
        <input type="checkbox" name="" onclick="handleCompleteTask(${item?.id})" id="task-checkbox-${item?.id}">
        <h3 class="task-text">${item?.task}</h3>
        <button onclick="handleDeleteTask(${item?.id})" class="option-btn">
            <img width="20px" src="images/trash.png" alt="">
        </button>
    `;

    taskContainer.appendChild(taskItem);
  });
};

mainFunc();
