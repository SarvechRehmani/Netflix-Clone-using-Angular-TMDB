import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    // if (!this.loginService.isLogedIn) {
    //   // this.router.navigate(['/login']);
    //   return;
    // }
  }
}
