import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../models/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css']
})
export class TodoElementComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {}

  setClasses() {
    const classes = {
      todo: true,
      isCompleted: this.todo.isDone,
      isFound: this.todo.isFound
    };
    return classes;
  }

  onDelete( todo ) {
    this.todoService.deleteTodoElement( todo );
  }

  onToggle( todo ) {
    this.todoService.toggleDone(todo);
  }
}
