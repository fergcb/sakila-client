import { Component, Input } from '@angular/core'
import { Film } from '../../models/Film'

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})
export class FilmListComponent {
  @Input()
  public films!: Film[]

  public getFilmKey (_: number, film: Film): number {
    return film.filmId
  }
}
