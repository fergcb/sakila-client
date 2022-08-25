import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/modules/user/services/user/user.service'
import { Actor } from '../../models/Actor'
import { ActorService } from '../../services/actor.service'

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.scss'],
})
export class ActorPageComponent implements OnInit {
  editIcon = faEdit

  @Input()
  public actor: Actor | null = null

  doneLoading: boolean = false
  adminMode: boolean = false

  constructor (
    private readonly actorService: ActorService,
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit (): void {
    this.userService.user$.subscribe(() => {
      this.adminMode = this.userService.isAdmin()
    })

    const id = this.route.snapshot.params['id']
    this.actorService
      .findActor(id)
      .subscribe(actor => {
        this.actor = actor
      })
  }
}
