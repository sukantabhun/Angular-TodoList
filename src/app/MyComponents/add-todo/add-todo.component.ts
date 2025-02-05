import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  desc: string = '';
  title: string = '';

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = { sno: 8, title: this.title, desc: this.desc, active: true };
    this.title = '';
    this.desc = '';
    this.todoAdd.emit(todo);
  }
}
