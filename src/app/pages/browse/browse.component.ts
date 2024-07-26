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
import { DomSanitizer } from '@angular/platform-browser';

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
    private toatr: ToastrService,
    public sanitizer: DomSanitizer
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
        this.bannerMovie = this.popularMovies[2];
        this.movieService
          .getMovieVideo(this.bannerMovie.id)
          .subscribe((data: any) => {
            this.bannerMovie.videoKey = data.results.find(
              (x: any) => (x.site = 'YouTube')
            ).key;
          });
        console.log(this.bannerMovie);
      },
      (error) => {
        this.toatr.error('Error in getting popular movies');
      }
    );
    this.movieService.getPlayingMovies().subscribe(
      (data: any) => {
        this.playingMovies = data.results;
      },
      (error) => {
        this.toatr.error('Error in getting playing movies');
      }
    );
    this.movieService.getTopRatedMovies().subscribe(
      (data: any) => {
        this.topRatedMovies = data.results;
      },
      (error) => {
        this.toatr.error('Error in getting top rated movies');
      }
    );
    this.movieService.getUpcomingMovies().subscribe(
      (data: any) => {
        this.upcomingMovies = data.results;
      },
      (error) => {
        this.toatr.error('Error in getting upcoming movies');
      }
    );
  }
}
