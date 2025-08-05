import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  name: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgIf, NgFor, RouterOutlet],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoListComponent {

  constructor(private http:HttpClient){}

  tasks: Task[] = [];

  @ViewChild('todoName') todoInputRef: ElementRef<HTMLInputElement> = null!;

  ngOnInit() {
    this.loadTasks();
  }

  addTask(name: string) {
    if (name) {
      this.tasks.push({ id: uuidv4(), name: name });
      console.log(name);
      this.todoInputRef.nativeElement.value = '';
    }
  }

  removeTask() {
    this.tasks.pop();
  }

  loadTasks() {
    this.http.get<Task[]>('http://localhost:3000/tasks')
      .toPromise()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
