'use strict'

export class Todo {

  constructor(task){
    this.task = task;

    this.id = new Date().getTime();

    this.complete = false;

    this.created_at = new Date();

  }
}