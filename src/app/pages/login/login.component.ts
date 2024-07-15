import { Component, Inject } from '@angular/core';
import { BG_URL, LOGO_URL } from '../../constant/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../Service/login.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  LOGO = LOGO_URL;
  BG = BG_URL;

  loginData = {
    email: '',
    password: '',
  };

  loginService = Inject(LoginService);
  router = Inject(Router);
  onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please enter email and password');
      return;
    }
    // API call to authenticate user
    this.loginService.loginUser(this.loginData);
    // Now we are loged in REDIRECT to the browse page.
    this.router.navigate(['/browse']);
  }
}
