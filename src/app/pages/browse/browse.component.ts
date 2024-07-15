import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../Service/movie.service';
import { Movie } from '../../models/Movies';
import { tmdbConfig } from '../../constant/config';

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
  popularMovies: Movie[] = [];
  playingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  bannerMovie!: Movie;

  imgUrl = tmdbConfig.img_path;

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(
      (data: any) => {
        this.popularMovies = data.results;
        this.bannerMovie = this.popularMovies[1];
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
