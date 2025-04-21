import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model'; // Import the Task interface

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;

  constructor() {}
}