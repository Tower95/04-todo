'use strict'
import {Todo} from './todo.class';
export class TodoList {

  constructor() {

    this.loadFromLocalStorage();

  }

  newTodo(todo) {

    this.todos.push(todo);
    this.saveInLocalStorage();

  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => { todo.id != id });
    this.saveInLocalStorage();
  }

  markComplete(id) {

    for (const todo of this.todos) {
      console.log(id, todo, id)
      if (todo.id == id) {

        todo.complete = !todo.complete;
        this.saveInLocalStorage();
        break;
      }
    }

  }

  deleteCompleted() {

    this.todos = this.todos.filter((todo) => { !todo.complete });
    this.saveInLocalStorage();

  }

  saveInLocalStorage() {

    localStorage.setItem('todo', JSON.stringify(this.todos));

  }

  loadFromLocalStorage() {

    this.todos = (localStorage.getItem('todo') != undefined) ?
      JSON.parse(localStorage.getItem('todo')) : [];
      
      this.todos = this.todos.map( Todo.fromJson);
    }


}