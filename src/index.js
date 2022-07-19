'use strict'
import  './styles.css';

import { Todo, TodoList } from './classes'
import {createHTML} from './js/components'; 


export const todoList = new TodoList();

console.log(todoList.todos);
todoList.todos.forEach(createHTML);










