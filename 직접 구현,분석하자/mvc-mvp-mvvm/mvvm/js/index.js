import TodoViewModel from "./TodoViewModel.js";
import TodoListView from "./TodoListView.js";
import TodoModel from "./TodoModel.js";
import TodoInputView from "./TodoInputView.js";
import LocalStorageService from "./LocalStorageService.js";

new TodoViewModel(
  { todoList: new TodoListView(), todoInput: new TodoInputView() },
  new TodoModel(new LocalStorageService("todoList_mvvm"))
);
