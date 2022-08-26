import { Component, Input } from '@angular/core'
import { PartialActor } from 'src/app/modules/films/models/PartialActor'

@Component({
  selector: 'app-partial-actor-card',
  templateUrl: './partial-actor-card.component.html',
  styleUrls: ['./partial-actor-card.component.scss'],
})
export class PartialActorCardComponent {
  @Input()
  public actor!: PartialActor
}
