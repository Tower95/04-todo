'use strict'

import { Todo } from "../classes";
import { todoList } from '../index';
// Reference to HTML
const todoListDiv = document.querySelector('.todo-list');
const txtInputTodo = document.querySelector('.new-todo');


export const createHTML = (todo) => {

  const htmlTodo = `
    <li class="${(todo.complete) ? 'completed' : ''}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${(todo.complet) ? 'checked' : ''}>
        <label>${todo.task}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li> 
  `;

  let div = document.createElement('div');

  div.innerHTML = htmlTodo;

  todoListDiv.append(div.firstElementChild);

  return div.firstElementChild;

}

// Events
txtInputTodo.addEventListener('keyup', (event) => {

  if (event.keyCode === 13 && txtInputTodo.value.length > 0) {
    const newTodo = new Todo(txtInputTodo.value);
    todoList.newTodo(newTodo);
    txtInputTodo.value = '';
    createHTML(newTodo);
  }

});

todoListDiv.addEventListener('click',(event)=>{

  const nameElement = event.target.localName;
  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute('data-id');
  
  if(nameElement.includes('input')){

    todoList.markComplete(todoId);
    todoElement.classList.toggle('completed');

  }

});

