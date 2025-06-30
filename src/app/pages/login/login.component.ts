import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  userService = inject(UserService);

  onLogin() {
    const formValue = this.loginForm.value;

    this.userService.onUserLogin(formValue).subscribe({
      next: (res: any) => {
        localStorage.setItem('studentId', res.userId);
        alert('User Found');
      },
      error: () => {
        alert('Wrong Credentials');
      },
    });
  }
}
