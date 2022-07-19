'use strict'

export class TodoList {

  constructor(){

    this.todos = [];

  }

  newTodo(todo){

    this.todos.push(todo);

  }

  deleteTodo(id){
    this.todos = this.todos.filter((todo)=>{todo.id != id});
  }

  markComplete(id){

    for(const todo of this.todos){
      console.log(id, todo,id)
      if(todo.id == id){

        todo.complete = !todo.complete;
        break;
      }
    }

  }

  deleteCompleted(){

    this.todos = this.todos.filter((todo)=>{!todo.complete});

  }

}