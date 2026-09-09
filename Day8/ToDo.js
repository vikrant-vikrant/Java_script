document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("input");
  let task = JSON.parse(localStorage.getItem("tasks")) || [];
  task.forEach((task) => {
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
    task.push(newTask);
    saveTask();
    input.value = "";
  });

  function renderTask(task) {
    let todo = document.createElement("li");
    todo.setAttribute("data-id", task.id);
    // if(task.completed) todo.classList.add('completed');
    // todo.addEventListener('click',(e)=>{
    //   if(e.target.tagName === 'BUTTON') return;
    //   todo.completed = !task.completed;
    //   todo.classList.toggle('completed');
    //   saveTask();
    // })
    todo.innerText = task.text;
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    todo.append(doneBtn);
    document.querySelector(".list ul").append(todo);
    todo.addEventListener('click',()=>{
      todo.classList.toggle('completed');
    })
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(task));
  }
});
