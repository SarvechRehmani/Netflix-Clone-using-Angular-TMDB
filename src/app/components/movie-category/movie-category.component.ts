import { Component, Input, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../models/Movies';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.css',
})
export class MovieCategoryComponent implements OnInit {
  ngOnInit(): void {}
  @Input() title = '';
  @Input() moviesList: Movie[] = [];
}
