'use strict'

export class TodoList {

  constructor(){

    this.todos = [];

  }

  newTodo(todo){

    this.todos.push(todo);

  }

  deleteTodo(id){
    this.todo = this.todo.filter((todo)=>{todo.id != id});
  }

  togleTodo(id){

  }

  deleteCompleted(){

  }

}