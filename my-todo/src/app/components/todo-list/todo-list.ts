import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Task {
  name: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, RouterOutlet],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoListComponent {
  tasks: Task[] = [];

  @ViewChild('todoName') todoInputRef: ElementRef<HTMLInputElement> = null!;

  addTask(name: string) {
    if (name) {
      this.tasks.push({ name: name });
      console.log(name);
      this.todoInputRef.nativeElement.value = '';
    }
  }
}
