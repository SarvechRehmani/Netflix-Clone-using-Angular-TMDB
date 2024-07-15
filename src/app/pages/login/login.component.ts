import { Component, inject, Inject, OnInit } from '@angular/core';
import { BG_URL, LOGO_URL } from '../../constant/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../Service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private toatr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.loginService.isLogedIn) {
      this.router.navigate(['/browse']);
      return;
    }
  }

  BG = BG_URL;

  loginData = {
    email: '',
    password: '',
  };

  // loginService = inject(LoginService);
  // router = inject(Router);
  onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      this.toatr.error('Please enter email and password');
      // alert('Please enter email and password');
      return;
    }
    // API call to authenticate user
    this.loginService.loginUser(this.loginData);
    // Now we are loged in REDIRECT to the browse page.
    this.toatr.success('Login successful');
    this.router.navigate(['/browse']);
  }
}
