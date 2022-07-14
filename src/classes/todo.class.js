'use strict'

export class Todo {

  constructor(task){
    this.task = task;

    this.id = new Date().getTime();

    this.complet = false;

    this.created_at = new Date();

  }
}