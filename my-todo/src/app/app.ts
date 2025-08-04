import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card";
import { TodoPage } from "./pages/todo-page/todo-page";
import { Home } from "./pages/home/home";
import { NavComponent } from "./components/nav/nav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, TodoPage, Home, NavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-todo');
}
