let task = [];

function showAllTask() {
  for (let i = 0; i < task.length; i++) {
    let todo = document.createElement("li");
    todo.value = task[i];
    let btn = (document.createElement("button").innerText = "Done");
    todo.append(btn);
    document.querySelector(".list ul").append(todo);
  }
}

document.querySelector(".addTask").addEventListener("click", function () {
  task.push(document.querySelector("input").value);
  showAllTask();
  document.querySelector("input").value = "";
});
