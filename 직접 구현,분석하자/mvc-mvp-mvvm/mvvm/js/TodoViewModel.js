export default class TodoViewModel {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.model.subscribe(this.view.todoList.displayTodoList);
    this.model.subscribe(this.view.todoList.displayLastTodo);
    this.model.subscribe(this.bindTodoListEvents.bind(this));
    this.render();
  }

  handleClickAddBtn() {
    // Model을 변경
    const todoText = this.view.todoInput.getInputValue();
    if (!todoText) {
      alert("내용을 입력해주세요.");
      return;
    }
    this.model.addTodoItem(todoText);
    this.view.todoInput.clearInput();
  }

  handleEnterPress(event) {
    if (event.code === "Enter") {
      this.handleClickAddBtn();
    }
  }

  handleToggleTodoStatus(todoId) {
    try {
      this.model.toggleTodoItem(todoId);
    } catch (error) {
      alert("토글을 성공하지 못했습니다...");
    }
  }

  handleClickRemoveBtn(todoId) {
    try {
      this.model.removeTodoItem(todoId);
    } catch (error) {
      alert("삭제를 성공하지 못했습니다...");
    }
  }

  bindTodoListEvents() {
    console.log(this.view);
    this.view.todoList.bindEventRemoveButton(
      this.handleClickRemoveBtn.bind(this)
    );
    this.view.todoList.bindToggleTodoItem(
      this.handleToggleTodoStatus.bind(this)
    );
  }

  bindTodoInputEvents() {
    // 이벤트 바인딩
    this.view.todoInput.bindAddTodoEvent(this.handleClickAddBtn.bind(this));
    this.view.todoInput.bindPressEnterEvent(this.handleEnterPress.bind(this));
  }

  render() {
    this.bindTodoListEvents();
    this.bindTodoInputEvents();
  }
}
