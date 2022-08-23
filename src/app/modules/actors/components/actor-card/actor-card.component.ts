import { Component, Input } from '@angular/core'
import { Actor } from '../../models/Actor'

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
})
export class ActorCardComponent {
  @Input()
  public actor!: Actor
}
