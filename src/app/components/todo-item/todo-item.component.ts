import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  // OnToggle
  onToggle(todo) {
    console.log('toggle');
    todo.completed = !todo.completed;
  }

  // OnDelete
  onDelete(todo) {
    console.log('Delete');
  }
}
