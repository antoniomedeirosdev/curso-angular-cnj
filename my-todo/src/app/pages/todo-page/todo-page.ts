import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css'
})
export class TodoPage {

}
