import Controller from "./Controller.js";
import TodoListView from "./TodoListView.js";
import TodoModel from "./TodoModel.js";
import TodoInputView from "./TodoInputView.js";
import LocalStorageService from "./LocalStorageService.js";

new Controller(
  { todoInput: new TodoInputView(), todoList: new TodoListView() },
  new TodoModel(new LocalStorageService("todoList"))
);
