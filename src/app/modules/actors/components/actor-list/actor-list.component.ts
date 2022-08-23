import { Component, Input } from '@angular/core'
import { Actor } from '../../models/Actor'

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
})
export class ActorListComponent {
  @Input()
  public actors!: Actor[]

  public getActorKey (_: number, actor: Actor): number {
    return actor.actorId
  }
}
