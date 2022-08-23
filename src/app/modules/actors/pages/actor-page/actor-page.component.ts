import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Actor } from '../../models/Actor'
import { ActorService } from '../../services/actor.service'

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.scss'],
})
export class ActorPageComponent implements OnInit {
  @Input()
  public actor!: Actor

  constructor (
    private readonly actorService: ActorService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit (): void {
    const id = this.route.snapshot.params['id']
    this.actorService
      .findActor(id)
      .subscribe(actor => {
        this.actor = actor
      })
  }
}
