import ToDoList from './modules/todolist.js';
import './styles/style.css';

const todoList = new ToDoList();
todoList.addToDo('Wash my car');

const todoListElement = document.querySelector('.todo-list');
todoListElement.innerHTML = todoList.renderToDos();