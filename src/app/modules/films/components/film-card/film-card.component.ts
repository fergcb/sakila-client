import { Component, Input } from '@angular/core'
import { PartialFilm } from 'src/app/modules/actors/models/PartialFilm'

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent {
  @Input()
  public film!: PartialFilm
}
