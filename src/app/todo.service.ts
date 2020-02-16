import { Injectable } from '@angular/core';
import {Todo} from './models/Todo';
import {cpus} from 'os';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  jsonString: string = localStorage.getItem('todoJSON');
  todo: {id: number, title: string, isDone: boolean, isFound: boolean}[] = [ Object.create(null) ];

  constructor() {
    if ( this.jsonString !== null ) {
      this.todo = JSON.parse(this.jsonString);
    }
  }

  getTodos() {
    return this.todo;
  }

  saveToJSON() {
    const json = JSON.stringify(this.todo);
    localStorage.setItem('todoJSON', json);
  }

  toggleDone( todo ) {
    let todoToModify;
    this.todo.forEach( object => {
      if ( object === todo ) {
        todoToModify = object;
      }
    });

    todoToModify.isDone = !todoToModify.isDone;

    this.saveToJSON();
  }

  deleteTodoElement( todo ) {
    this.todo.forEach( (object, index) => {
      if ( object === todo ) {
        this.todo.splice( index, 1 );
      }
    });

    this.saveToJSON();
  }

  addTodoElement( title: string ) {
    let newID = 0;

    if ( this.todo.length > 0 ) {
      const lastId = this.todo[this.todo.length - 1].id;
      newID = lastId + 1;
    }

    this.todo.push( new Todo( newID, title ) );
    this.saveToJSON();
  }

  findTodo( textToFind: string ) {
    this.todo.forEach( object => {
      if ( object.title.toLocaleLowerCase().includes(textToFind.toLocaleLowerCase()) ) {
        object.isFound = true;
      } else {
        object.isFound = false;
      }
    } );
  }

  clearFinds() {
    this.todo.forEach( object => {
      object.isFound = false;
    });
  }
}
