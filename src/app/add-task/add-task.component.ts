import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    priority_level: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    progress_level: new FormControl('', [Validators.required])
  });

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get date() {
    return this.form.get('date');
  }

  get time() {
    return this.form.get('time');
  }

  get priority_level() {
    return this.form.get('priority_level');
  }

  get category() {
    return this.form.get('category');
  }

  get progress_level() {
    return this.form.get('progress_level');
  }

  add_task() {
    if (this.form.valid) {
      console.log('Task added:', this.form.value);
      // Add logic to save the task (e.g., send it to a server)
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }
}