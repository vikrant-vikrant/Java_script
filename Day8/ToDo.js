document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("input");
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.forEach((task) => {
    renderTask(task);
  });

  document.querySelector(".addTask").addEventListener("click", function () {
    const taskText = input.value.trim();
    if (taskText === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    taskList.push(newTask);
    renderTask(newTask);
    saveTask();
    input.value = "";
  });

  function renderTask(task) {
    let todo = document.createElement("li");
    todo.setAttribute("data-id", task.id);
    todo.innerText = task.text;
    document.querySelector(".list ul").append(todo);
    todo.addEventListener("click", (e) => {
      e.stopPropagation();
      taskList = taskList.filter((t)=>t.id !== task.id)
      todo.remove();
      saveTask();
    });
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }
});
