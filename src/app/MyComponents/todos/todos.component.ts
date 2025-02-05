import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private cookieService: CookieService) {
    let todosFromStorage = cookieService.get('todos');
    this.todos = todosFromStorage ? JSON.parse(todosFromStorage) : [];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.cookieService.set('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.cookieService.set('todos', JSON.stringify(this.todos));
  }
  checkTodo(todo: Todo) {
    console.log('here');
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    this.cookieService.set('todos', JSON.stringify(this.todos));
  }
}
