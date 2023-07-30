// select elements
const myInput = document.querySelector("input"),
  todoButton = document.querySelector(".todo-button"),
  todoList = document.querySelector(".todo-list");
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removecheck);

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div"),
    newTodo = document.createElement("li"),
    removeButton = document.createElement("button"),
    doneButton = document.createElement("button");
  todoDiv.classList.add("todo");
  todoList.appendChild(todoDiv);
  newTodo.classList.add("todo-item");
  newTodo.textContent = myInput.value;
  todoDiv.appendChild(newTodo);
  removeButton.textContent = "Trash";
  removeButton.classList.add("trash-button");
  doneButton.textContent = "Done";
  doneButton.classList.add("done-button");
  todoDiv.append(removeButton, doneButton);
  myInput.value = "";
}

function removecheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "done-button") {
    const checked = item.parentElement,
      li = checked.childNodes[0];
    li.classList.toggle("done-li");
    checked.classList.toggle("done-div");
  }
}
