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
      this.http.post('http://localhost:3000/tasks', { id: uuidv4(), name})
        .toPromise()
        .then((response) => {
          console.log(response);
          this.loadTasks();
          this.todoInputRef.nativeElement.value = '';
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  removeTask(id: string) {
    this.http.delete(`http://localhost:3000/tasks/${id}`)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.loadTasks();
      })
      .catch((error) => {
        console.log(error);
      });
    this.tasks.pop();
  }

  loadTasks() {
    this.http.get<Task[]>('http://localhost:3000/tasks')
      .toPromise()
      .then((response) => {
        this.tasks = response!;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
