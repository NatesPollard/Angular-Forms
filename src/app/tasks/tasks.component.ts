import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Task } from '../models/task.model'; // Import the Task interface



@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []; // Initialize tasks as an empty array

  constructor(private service: TasksServiceService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Fetch tasks from the backend
  loadTasks(): void {
    this.service.getTasks().subscribe(
      (result: Task[]) => {
        this.tasks = result; // Assign the fetched tasks to the tasks array
        console.log('Tasks fetched successfully:', this.tasks);
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

}