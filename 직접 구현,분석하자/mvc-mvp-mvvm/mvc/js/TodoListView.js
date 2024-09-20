export default class TodoListView {
  constructor() {
    const rootElem = document.querySelector("main");
    rootElem.innerHTML += this.getTemplate();
  }

  getTemplate() {
    return `
      <ul></ul>
      <h2></h2>
    `;
  }

  displayTodoList(todoList) {
    const ul = document.querySelector("ul");
    ul.innerHTML = `${todoList
      .map(
        (todo) => `
          <li id="${todo.id}">
            <input type="checkbox" class="toggle_todo" data-todo-id="${
              todo.id
            }" ${todo.isDone ? "checked" : ""} />
            <span>${todo.text}</span>
            <button data-todo-id="${
              todo.id
            }" class="remove_button">Remove</button>
          </li>
        `
      )
      .join("")}`;
  }

  bindEventRemoveButton(removeItemHandler) {
    const removeButtons = document.querySelectorAll(".remove_button");
    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        removeItemHandler(button.dataset.todoId);
      });
    });
  }

  bindToggleTodoItem(toggleTodoItemHandler) {
    const toggleButtons = document.querySelectorAll(".toggle_todo");
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        toggleTodoItemHandler(button.dataset.todoId);
      });
    });
  }

  displayLastTodo(todoList) {
    const h2 = document.querySelector("h2");
    const lastItem = todoList[todoList.length - 1];
    if (!lastItem) {
      h2.innerHTML = `Last Todo: None`;
      return;
    }
    h2.innerHTML = `Last Todo: ${todoList[todoList.length - 1]?.id}`;
  }
}
