import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
  textToFind: string;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  findTodo() {
    if (this.textToFind === '' || this.textToFind === null || this.textToFind === undefined ) {
      return;
    }
    this.todoService.findTodo( this.textToFind );
  }

  clearFinds() {
    this.todoService.clearFinds();
  }
}
