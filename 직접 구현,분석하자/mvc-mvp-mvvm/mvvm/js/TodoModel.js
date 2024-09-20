import Observable from "./Observable.js";

export default class TodoModel extends Observable {
  constructor(storageService) {
    super();
    this.storageService = storageService;
    let _todoList = storageService.load() || [];
    console.log(_todoList);

    Object.defineProperty(this, "todoList", {
      get() {
        return _todoList;
      },
      set(value) {
        _todoList = value;
        console.log(value);
        this.notify(value);
        this.storageService.save(value);
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
