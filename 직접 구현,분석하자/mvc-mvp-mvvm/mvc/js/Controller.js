// Controller가 이벤트에 대한 행동을 수행한다.

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
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

    // 변경된 Model을 기반으로 View를 변경
    this.renderTodoListView();

    this.view.todoInput.clearInput();
  }

  handleClickRemoveBtn(todoId) {
    try {
      this.model.removeTodoItem(todoId);
      this.renderTodoListView();
    } catch (error) {
      alert("삭제를 성공하지 못했습니다...");
    }
  }

  handleEnterPress(event) {
    console.log(event);
    if (event.code === "Enter") {
      this.handleClickAddBtn();
    }
  }

  handleToggleTodoStatus(todoId) {
    try {
      this.model.toggleTodoItem(todoId);
      this.renderTodoListView();
    } catch (error) {
      alert("토글을 성공하지 못했습니다...");
    }
  }

  renderTodoListView() {
    this.view.todoList.displayTodoList(this.model.getTodoList());
    this.view.todoList.bindEventRemoveButton(
      this.handleClickRemoveBtn.bind(this)
    );
    this.view.todoList.bindToggleTodoItem(
      this.handleToggleTodoStatus.bind(this)
    );
    this.view.todoList.displayLastTodo(this.model.getTodoList());
  }

  renderTodoInputView() {
    this.view.todoInput.displayAddButton(this.handleClickAddBtn.bind(this));
    this.view.todoInput.bindPressEnterEvent(this.handleEnterPress.bind(this));
  }

  render() {
    this.renderTodoInputView();
    this.renderTodoListView();
  }
}
