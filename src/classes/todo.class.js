'use strict'

export class Todo {

  static fromJson({ id, complete, task, created_at }) {

    const tempTodo = new Todo(task);
    tempTodo.id = id;
    tempTodo.complete = complete;
    tempTodo.created_at = created_at

    return tempTodo
  }

  constructor(task) {
    this.task = task;

    this.id = new Date().getTime();

    this.complete = false;

    this.created_at = new Date();

  }
}