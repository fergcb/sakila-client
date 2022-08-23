import { Component, Input } from '@angular/core'
import { Film } from '../../models/Film'

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent {
  @Input()
  public film!: Film
}
