import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pr1';

  constructor(private fb: FormBuilder, private fb1: FormBuilder, private router: Router) {
  }

  sendmail = this.fb.group({
    FullName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })

  ReviewSubmit() {}
}
