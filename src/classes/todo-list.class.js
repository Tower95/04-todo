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

  }

}