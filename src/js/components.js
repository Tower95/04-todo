'use strict'


// Reference to HTML
  let todoListDiv = document.querySelector('.todo-list');
  let newTodoInput = document.querySelector('.new-todo');


export const createHTML = (todo) => {

  const htmlTodo = `
    <li class="${ (todo.complet ) ? 'completed': ''  }" data-id="${todo.id}">
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

  return div; 

}