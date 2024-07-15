import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/Movies';
import { tmdbConfig } from '../../constant/config';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  ngOnInit(): void {}
  @Input() movie!: Movie;
  imgUrl = tmdbConfig.img_path;
}
