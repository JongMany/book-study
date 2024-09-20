export default class TodoInputView {
  constructor() {
    const rootElem = document.querySelector("main");
    rootElem.innerHTML += this.getTemplate();
  }

  getTemplate() {
    return `
      <div class="input_area">
        <input id="todo_input" />    
        <div class="button_area">
          <button id="add_todo_button">Add</button>
        </div>
      </div>
    `;
  }

  getInputValue() {
    const inputElement = document.querySelector("#todo_input");
    return inputElement.value;
  }

  clearInput() {
    const inputElement = document.querySelector("#todo_input");
    inputElement.value = "";
  }

  bindPressEnterEvent(enterPressHandler) {
    const target = document.querySelector("#todo_input");
    target.addEventListener("keypress", enterPressHandler);
  }

  displayAddButton(eventHandler) {
    const target = document.querySelector("#add_todo_button");
    target.addEventListener("click", eventHandler);
  }
}
