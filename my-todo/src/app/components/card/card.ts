import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {

}
