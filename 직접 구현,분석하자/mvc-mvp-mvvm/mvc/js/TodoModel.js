export default class TodoModel {
  constructor(storageService) {
    let todoList = storageService.load() || [];
    Object.defineProperty(this, "todoList", {
      get() {
        return todoList;
      },
      set(value) {
        todoList = value;
        console.log("todoList has been reassigned");
        storageService.save(todoList);
      },
    });
  }

  getTodoList() {
    return this.todoList;
  }

  addTodoItem(todoText) {
    this.todoList = [
      ...this.todoList,
      { id: `${Date.now()}`, text: todoText, isDone: false },
    ];
  }

  removeTodoItem(todoId) {
    if (!todoId) {
      throw new Error("Not Found TodoItem ID");
    }
    this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
  }

  toggleTodoItem(todoId) {
    if (!todoId) {
      throw new Error("Not Found TodoItem ID");
    }
    this.todoList = this.todoList.map((todo) =>
      todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
    );
  }
}
