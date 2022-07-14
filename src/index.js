'use strict'
import  './styles.css';

import{ Todo, TodoList } from './classes'

let task = new Todo('learn to program Javascript');

let todoList = new TodoList();

todoList.newTodo(task);

console.log(todoList.todos);










