import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../Service/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  constructor(
    private movieService: MovieService,
    private toatr: ToastrService
  ) {}
  popularMovies: any[] = [];
  playingMovies: any[] = [];
  topRatedMovies: any[] = [];
  upcomingMovies: any[] = [];
  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(
      (data: any) => {
        this.popularMovies = data.results;
        console.log(this.popularMovies);
      },
      (error) => {
        this.toatr.error('Error in getting movies');
      }
    );
    this.movieService.getPlayingMovies().subscribe(
      (data: any) => {
        this.playingMovies = data.results;
        console.log(this.playingMovies);
      },
      (error) => {
        this.toatr.error('Error in getting movies');
      }
    );
    this.movieService.getTopRatedMovies().subscribe(
      (data: any) => {
        this.topRatedMovies = data.results;
        console.log(this.topRatedMovies);
      },
      (error) => {
        this.toatr.error('Error in getting movies');
      }
    );
    this.movieService.getUpcomingMovies().subscribe(
      (data: any) => {
        this.upcomingMovies = data.results;
        console.log(this.upcomingMovies);
      },
      (error) => {
        this.toatr.error('Error in getting movies');
      }
    );
  }
}
