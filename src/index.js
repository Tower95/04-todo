'use strict'
import  './styles.css';

import { Todo, TodoList } from './classes'
import {createHTML} from './js/components'; 

let task = new Todo('learn to program Javascript');

let todoList = new TodoList();

todoList.newTodo(task);
// task.complet = true;
console.log(todoList.todos);

createHTML(task);










