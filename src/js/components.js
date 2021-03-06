'use strict'

import { Todo } from "../classes";
import { todoList } from '../index';
// Reference to HTML
const todoListDiv = document.querySelector('.todo-list');
const txtInputTodo = document.querySelector('.new-todo');
const earaseCompletedButton = document.querySelector('.clear-completed');
const filterUl = document.querySelector('.filters');
const countlbl =  document.querySelector('.todo-count');
let count = 0;
console.log(countlbl);
export const createHTML = (todo) => {

  const htmlTodo = `
    <li class="${(todo.complete) ? 'completed' : ''}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${(todo.complete) ? 'checked' : ''}>
        <label>${todo.task}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li> 
  `;

  let div = document.createElement('div');

  div.innerHTML = htmlTodo;

  todoListDiv.append(div.firstElementChild);
  count ++;
  counterDraw();
  return div.firstElementChild;

}

const counterDraw = () =>{
  
  countlbl.innerHTML = `<strong>${count}</strong> pending${count > 1 ? 's' : ''}` 
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

todoListDiv.addEventListener('click', (event) => {

  const nameElement = event.target.localName;
  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute('data-id');

  if (nameElement.includes('input')) {

    todoList.markComplete(todoId);
    todoElement.classList.toggle('completed');

  }

  if (nameElement.includes('button')) {
    todoList.deleteTodo(todoId);
    todoListDiv.removeChild(todoElement)
    count--;
    counterDraw();
  }


});

earaseCompletedButton.addEventListener('click', (event) => {
  console.log('pressing buttom');
  todoList.deleteCompleted();

  for (let i = todoListDiv.children.length - 1; i >= 0; i--) {

    const element = todoListDiv.children[i];

    if (element.classList.contains('completed')) {

      todoListDiv.removeChild(element);
      count--;
    }

  }
  counterDraw();

});

filterUl.addEventListener('click', (event) => {
  const option = event.target.text;

  
  for(const element of todoListDiv.children ){
    element.classList.remove('hidden');

    const completed = element.classList.contains('completed');

    const filter = {
      'All': () => {
        console.log('All');
      },
      'Pendings': () => {
        console.log('Pendings');
        if(completed){

          element.classList.add('hidden');

        }
      },
      'Completed': () => {
        if(!completed){
          element.classList.add('hidden');   
        }
      },
      undefined: () => { return 0; }
    }  
    filter[option]();
  }

});
