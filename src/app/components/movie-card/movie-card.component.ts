import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.movie);
  }
  @Input() movie: any = {};
}
