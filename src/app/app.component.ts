import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list';
  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'Sukanta';
  //   }, 2000);
  // }
}
