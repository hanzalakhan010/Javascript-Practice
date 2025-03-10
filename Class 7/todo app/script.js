var todos;
var nextId;
function* idGenerator() {
  yield nextId++;
}

function saveState() {
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("nextId", JSON.stringify(nextId));
}
function loadState() {
  todos = JSON.parse(localStorage.getItem("todos")) ?? [];
  nextId = JSON.parse(localStorage.getItem("nextId"));

  todos.forEach((todo) => {
    prepareTodoDiv(todo.id, todo.todo, todo.tags, todo.status);
  });
}
function done(todoId) {
  document.getElementById(todoId).classList.add("done");
  document.getElementById(todoId).children[1].remove();
  for (let todo of todos) {
    if (todo.id == `${todoId}`) {
      todo.status = "done";
      saveState();
      return;
    }
  }
}
function del(todoId) {
  document.getElementById(todoId).remove();
  todos.forEach((todo, index) => {
    if (todo.id == todoId) {
      todos.splice(index, 1);
      saveState();
      return;
    }
  });
  saveState();
}
function prepareTodoDiv(id, todo, tags, status_) {
  let tagsDiv = "";
  if (tags) {
    tags.forEach((tag) => {
      tagsDiv += `<span class = 'todoTag'>${tag}</span>`;
    });
  }
  let newTodo = `
        <div id = '${id}' class = 'todo'>
        <p>${todo}</p>
        ${
              status_
                ? ""
                : `<button class = 'doneBtn' onclick = 'done("${id}")'>Done</button>`
            }
            <button class = 'delBtn' onclick = 'del("${id}")'>Delete</button>
            <div class = 'tagsDiv'>
                ${tagsDiv}
            </div>
        </div>
        `;
  document.getElementById("todos").innerHTML += newTodo;
}

function addTodo() {
  let todo = document.getElementById("newTodo").value;
  if (todo) {
    nextId++;
    let tags = [...document.querySelectorAll(".tag.selected")].map(
      (tag) => tag.textContent
    );
    prepareTodoDiv(`todoID_${nextId}`, todo, tags);
    todos.push({ id: `todoID_${nextId}`, todo, tags });
    document.getElementById("newTodo").value = "";
  }
}
document.getElementById("newTodo").addEventListener("keydown", ({ key }) => {
  if (key == "Enter") {
    addTodo();
    saveState();
  }
});

document.querySelectorAll(".tag").forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.classList.toggle("selected");
  });
});

document.getElementById("addBtn").addEventListener("click", () => {
  addTodo;
  saveState();
});
