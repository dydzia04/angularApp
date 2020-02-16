import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  textToTodo: string;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  addTodo() {
    if ( this.textToTodo === '' || this.textToTodo === null ) {
      window.alert('Treść nie może być pusta!');
      return;
    }
    this.todoService.addTodoElement(this.textToTodo);
    this.textToTodo = '';
  }
}
