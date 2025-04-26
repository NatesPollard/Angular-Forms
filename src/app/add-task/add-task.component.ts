import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksServiceService } from '../tasks-service.service';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    priority_level: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    progress_level: new FormControl('', [Validators.required])
  });
  constructor( 
    private service: TasksServiceService,
   private  router: Router,
  
  ) {}
    
  
  
   ngOnInit(): void {}
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
        const task = this.form.value;
    
          
          // Adding a new task
          this.service.addTask(task).subscribe(
            (result) => {
              console.log('Task added successfully:', result);
            },
            (error) => {
              console.error('Error adding task:', error);
            }
          );
        
      } else {
        console.log('Form is invalid');
      }

      console.log(this.form.value);
    }

    // add_task() {
    // let x = <task>this.form.value;
    // x.time = x.date + " "+this.time.value;
    // this.service.addTask(x).subscribe((result:{Task:{title}})=>{console.log(result.task.title+" added successfully")},
    // (err: HttpErrorResponse)=>{console.log(err)
    // });
    // this.form.reset();
    // this.router.navigate(['home']);





  
}
