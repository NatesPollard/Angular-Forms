import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Task } from '../models/task.model'; // Import the Task interface
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component'; // Import the AddTaskComponent



@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []; // Initialize tasks as an empty array

  constructor(private service: TasksServiceService, private dialog: MatDialog) {}

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

  openEditTaskModal(task: Task): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '500px',
      data: task // Pass the task data to the modal
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadTasks(); // Reload tasks after editing
      }
    });
  }


   // Filter tasks based on the selected type
   filterTasks(filterType: string): void {
    this.service.getFilteredTasks(filterType).subscribe(
      (result: Task[]) => {
        this.tasks = result; // Update the tasks array with filtered tasks
        console.log(`Tasks filtered by ${filterType}:`, this.tasks);
      },
      (error: HttpErrorResponse) => {
        console.error(`Error filtering tasks by ${filterType}:`, error);
      }
    );
  }
  

}