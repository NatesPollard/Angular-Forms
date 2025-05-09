import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
  private apiUrl = 'https://localhost:3000/tasks'; // Base API URL

  constructor(private http: HttpClient) {}

  // Fetch all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/get_all`);
  }

  // Add a new task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/add`, task);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/edit_task`, task);
  }

   // Fetch filtered tasks
   getFilteredTasks(filterType: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/filter?type=${filterType}`);
  }
}