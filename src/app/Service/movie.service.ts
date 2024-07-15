import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tmdbConfig } from '../constant/config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    const headers = this.getHeaders();
    return this.http.get('https://api.themoviedb.org/3/movie/popular', {
      headers: headers,
    });
  }

  getPlayingMovies() {
    const headers = this.getHeaders();
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', {
      headers: headers,
    });
  }

  getTopRatedMovies() {
    const headers = this.getHeaders();
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', {
      headers: headers,
    });
  }

  getUpcomingMovies() {
    const headers = this.getHeaders();
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', {
      headers: headers,
    });
  }

  getMovieVideo(movieId: number) {
    const headers = this.getHeaders();
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      {
        headers: headers,
      }
    );
  }

  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append(
      'Authorization',
      'Bearer ' + tmdbConfig.accessToken
    );
    return headers;
  }
}
