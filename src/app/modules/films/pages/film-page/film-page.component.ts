import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Film } from '../../models/Film'
import { FilmsService } from '../../services/films.service'

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss'],
})
export class FilmPageComponent implements OnInit {
  @Input()
  public film!: Film

  constructor (
    private readonly filmService: FilmsService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit (): void {
    const id = this.route.snapshot.params['id']
    this.filmService
      .findFilm(id)
      .subscribe(film => {
        this.film = film
      })
  }
}
